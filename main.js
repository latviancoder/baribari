require('node-jsx').install({harmony: true});

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
    DocumentTitle  = require('react-document-title'),
    Iso            = require('iso'),
    _              = require('underscore'),
    https          = require('https'),
    fs             = require('fs'),
    bodyParser     = require('body-parser'),

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
	var ip = req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;

	var geo = geoip.lookup(ip);

	req.client_ip = ip;

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
				ip: ip,
				geo: geo
			}
		};

		next();
	}
});

// Magic
app.use((req, res) => {
	console.info(req.url);

	// We take the locals data we have fetched and seed our stores with data
	alt.bootstrap(JSON.stringify(res.locals.data || {}));

	var iso = new Iso();

	match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
		var content = ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>);

		var messages = {
			de: require('./src/messages/de'),
			en: require('./src/messages/en')
		};

		iso.add(content, alt.flush());
		res.render('index', {
			body: iso.render(),
			title: DocumentTitle.rewind(),
			environment: (req.client_ip.match(/127\.0\.0\.1/) ? 'dev' : 'prod')
		})
	});
});

var server = app.listen(1337, () => {
	console.log('server started on port 1337');
});