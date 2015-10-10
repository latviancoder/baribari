var Iso    = require('iso'),
    Router = require('react-router'),
    React  = require('react'),
    routes = require('./src/routes'),
    alt    = require('./src/alt');

require('./src/vendors/intl_de_polyfill');
var intlData = require('./src/intl/de');

// Once we bootstrap the stores, we run react-router using Router.HistoryLocation
// The element is created and we just render it into the container
Iso.bootstrap(function(state, _, container) {
	alt.bootstrap(state);

	Router.run(routes, Router.HistoryLocation, function(Handler) {
		React.render(<Handler {...intlData} />, container);
	})
});
