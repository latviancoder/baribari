require('node-jsx').install({harmony: true});

// Polyfilling built-in node intl library with other locales (for example german)
//require('intl');
//Intl.NumberFormat = IntlPolyfill.NumberFormat;
//Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/db.sqlite');
db.run("CREATE TABLE IF NOT EXISTS emails (email TEXT, data TEXT)");

// Dependencies
var express        = require('express'),
    favicon        = require('serve-favicon'),
    geoip          = require('geoip-lite'),
    locale         = require('locale'),
    React          = require('react'),
    ReactDOMServer = require('react-dom/server'),
    Iso            = require('iso'),
    _              = require('underscore'),
    https          = require('https'),
    fs             = require('fs'),
    bodyParser = require('body-parser'),

    alt            = require('./src/alt'),
    routes         = require('./src/routes');

var { match, RoutingContext } = require('react-router');

// Initialize app
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Get system language
const supported_locales = ['en', 'de'];
app.use(locale(supported_locales));

// Get ip
var get_ip = require('ipware')().get_ip;

// Add mail api endpoint
app.post('/api/test', (req, res) => {
	db.run("INSERT INTO emails (email, data) VALUES ($email, $data)", {
		$email: req.body.email,
		$data: JSON.stringify(req.body.locale)
	}, () => {
		res.send();
	});
});

// Get and geographical data
app.use((req, res, next) => {
	req.ip_info = get_ip(req);
	var geo = geoip.lookup(req.ip_info.clientIp);

	if (req.url == '/') {
		// If no language specified in URL - determine locale from user IP
		var locale = 'en';

		if (geo && geo.country == 'DE')
			locale = 'de';

		// And redirect to this locale
		res.redirect('/' + locale);
	} else {
		// If language specified - take locale from URL
		req.locale = req.url.match('^/([^/]+)')[1];

		// Populate LocaleStore with locale data
		res.locals.data = {
			LocaleStore: {
				locale: req.locale,
				ip: req.ip_info.clientIp,
				geo: geo
			}
		};

		next();
	}
});

// Magic
app.use((req, res) => {
	// We take the locals data we have fetched and seed our stores with data
	alt.bootstrap(JSON.stringify(res.locals.data || {}));

	var iso = new Iso();

	match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
		var content = ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>);

		iso.add(content, alt.flush());
		res.render('index', {body: iso.render()})
	});
});

var server = app.listen(1337, () => {
	console.log('server started on port 1337');
});