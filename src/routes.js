var React = require('react');
var Route = require('react-router').Route;

var Landing = require('./components/landing/Landing.js'),
    Hello   = require('./components/Hello.js');

var routes = (
	<Route name='home' path='/' handler={Landing}>
	</Route>
);

module.exports = routes;