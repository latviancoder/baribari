var Iso           = require('iso'),
    Router        = require('react-router'),
    React         = require('react'),
    routes        = require('./src/routes'),
    alt           = require('./src/alt'),
    LanguageStore = require('./src/stores/LanguageStore');

var messages_directory = require.context('./src/messages', true, /^\.\/.*\.js$/);

// Once we bootstrap the stores, we run react-router using Router.HistoryLocation
// The element is created and we just render it into the container
Iso.bootstrap(function(state, _, container) {
	alt.bootstrap(state);

	var messages = messages_directory(`./${LanguageStore.getState().locale}.js`);

	Router.run(routes, Router.HistoryLocation, function(Handler) {
		React.render(<Handler {...messages} />, container);
	})
});
