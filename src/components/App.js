var React         = require('react'),
    LanguageStore = require('../stores/LanguageStore');

var { IntlMixin } = require('react-intl');

var messages = {};
messages.de = require('../messages/de');
messages.en = require('../messages/en');

var App = React.createClass({
	mixins: [IntlMixin],

	render() {
		return (
			<div>
				{React.cloneElement(this.props.children, messages[LanguageStore.getState().locale])}
			</div>
		)
	}
});

module.exports = App;