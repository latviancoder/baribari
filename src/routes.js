var React = require('react');
var { Route, IndexRoute } = require('react-router');

var App     = require('./components/App.js'),
    Landing = require('./components/landing/Landing.js'),
    Index   = require('./pages/index/Index.js');

var routes = (
	<Route path='/:lang' component={App}>
		<IndexRoute component={Index}/>
		<Route path='landing' component={Landing}/>
	</Route>
);

module.exports = routes;