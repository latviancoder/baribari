var React = require('react');
var { Route, IndexRoute } = require('react-router');

var App     = require('../components/App.js'),
    Details = require('../pages/details/Details.js'),
    Index   = require('../pages/index/Index.js');

var routes = (
	<Route path='/:lang' component={App}>
		<IndexRoute component={Index}/>
		<Route path='details/:link' component={Details}/>
	</Route>
);

module.exports = routes;