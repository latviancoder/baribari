require('node-jsx').install({harmony: true})

// Dependencies
var express = require('express'),
    Router  = require('react-router'),
    React   = require('react'),
    favicon = require('serve-favicon'),
    Iso     = require('iso');

var routes = require('./src/routes');
var alt = require('./src/alt');

// Initialize app
var app = express();

// Directory for static JS/CSS files
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('view engine', 'ejs');

// Prior to running react-router we setup this route in order to handle data fetching.
// We can pass data fetched via express' locals.
app.get('/hello/:name?', function(req, res, next) {
	res.locals.data = {HelloStore: {name: req.params.name || 'world'}};
	next()
});

// Magic
app.use(function(req, res) {
	// We take the locals data we have fetched and seed our stores with data
	alt.bootstrap(JSON.stringify(res.locals.data || {}));

	// We use react-router to run the URL that is provided in routes.jsx
	Router.run(routes, req.url, function(Handler) {
		var markup = React.renderToString(React.createElement(Handler));

		// Use iso to render, it picks back up on the client side and bootstraps the stores.
		var body = Iso.render(markup, alt.flush());
		res.render('index', {body: body});

	})
});

app.listen(1337, '127.0.0.1', function() {
	console.log('started app');
});