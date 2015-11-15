require("babel-polyfill");

var Iso      = require('iso'),
    React    = require('react'),
    ReactDOM = require('react-dom'),
    routes   = require('./src/routes'),
    alt      = require('./src/alt');

import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory();

var { Router } = require('react-router');

// Once we bootstrap the stores, we run react-router using Router.HistoryLocation
// The element is created and we just render it into the container
Iso.bootstrap(function(state, _, container) {
	alt.bootstrap(state);
	ReactDOM.render(<Router history={history} routes={routes}/>, container);
});
