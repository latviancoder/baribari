require('node-jsx').install({harmony: true});

// Polyfilling built-in node intl library with other locales (for example german)
require('intl');
Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

// Dependencies
var express = require('express'),
    favicon = require('serve-favicon'),
    geoip   = require('geoip-lite'),
    locale  = require('locale'),
    React   = require('react'),
    Router  = require('react-router'),
    Iso     = require('iso'),
    _       = require('underscore'),

    alt     = require('./src/alt'),
    routes  = require('./src/routes');

// Initialize app
var app = express();

app.set('view engine', 'ejs');

// Directory for static JS/CSS files
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

// Get system language
const supported_locales = ['en', 'de'];
app.use(locale(supported_locales));

// Get ip
var get_ip = require('ipware')().get_ip;

// Populate LanguageStore with locale and geographical data
app.use((req, res, next) => {
	req.ip_info = get_ip(req);

	// Geographical location of ip
	//var geo = geoip.lookup(req.ip_info.clientIp);
	var geo = geoip.lookup('87.157.56.91');

	if (geo && geo.country == 'DE')
		req.locale = 'de';

	req.locale = 'en';

	res.locals.data = {
		LanguageStore: {
			locale: req.locale,
			ip: req.ip_info.clientIp,
			geo: geo
		}
	};

	next();
});

// Prior to running react-router we setup this route in order to handle data fetching.
// We can pass data fetched via express' locals.
//app.get('/', (req, res, next) => {
//	res.locals.data = _.extend(res.locals.data, {
//		HelloStore: {name: 'fromserver'}
//	});
//	next()
//});

// Magic
app.use((req, res) => {
	// We take the locals data we have fetched and seed our stores with data
	alt.bootstrap(JSON.stringify(res.locals.data || {}));

	var iso = new Iso();
	var messages = require(`./src/messages/${req.locale}.js`);

	// We use react-router to run the URL that is provided in routes.jsx
	Router.run(routes, req.url, (Handler) => {
		var content = React.renderToString(React.createElement(Handler, messages));

		// Use iso to render, it picks back up on the client side and bootstraps the stores.
		iso.add(content, alt.flush());
		res.render('index', {body: iso.render()})

	})
});

app.listen(1337, '127.0.0.1', () => {
	console.log('started app on 127.0.0.1:1337');
});