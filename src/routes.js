var React = require('react');
var Route = require('react-router').Route;

var App   = require('./components/App.js'),
    Hello = require('./components/Hello.js');

var routes = (
	<Route name='home' path='/' handler={App}>
		<Route name='hello' path='/hello/:name?' handler={Hello}/>
	</Route>
);

module.exports = routes;