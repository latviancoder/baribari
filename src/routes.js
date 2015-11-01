var React = require('react');
var { Route } = require('react-router');

var App = require('./components/App.js');
var Landing = require('./components/landing/Landing.js');

var routes = (
	<Route name='home' path='/' component={App}>
		<Route name='lang' path='/:lang' component={Landing}/>
	</Route>
);

module.exports = routes;