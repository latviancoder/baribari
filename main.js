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
    https          = require('https'),
    fs             = require('fs'),
    bodyParser     = require('body-parser');

var { match, RoutingContext } = require('react-router');

// Initialize app
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

bodyParser.json();

// Get system language
const supported_locales = ['en', 'de'];
app.use(locale(supported_locales));

// Express routes (api, fill stores with data)
require('./src/routes/routes.express')(app, db);

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

		res.locals.data = res.locals.data || {};

		// Populate LocaleStore with locale data
		res.locals.data.LocaleStore = {
			locale: req.locale,
			supported_locales: supported_locales,
			ip: ip,
			geo: geo
		};

		next();
	}
});

var alt = require('./src/alt');
var routes = require('./src/routes/routes.react');

// Magic
app.use((req, res) => {

	// We take the locals data we have fetched and seed our stores with data
	alt.bootstrap(JSON.stringify(res.locals.data || {}));

	var iso = new Iso();

	match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
		var content = ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>);

		iso.add(content, alt.flush());

		console.log(req.client_ip);

		res.render('index', {
			body: iso.render(),
			title: DocumentTitle.rewind(),
			environment: (req.client_ip.match(/(127\.0\.0\.1|::1)/) ? 'dev' : 'prod')
		})
	});
});

var server = app.listen(1337, () => {
	console.log('server started on port 1337');
});