var React         = require('react'),
    LocaleStore = require('../stores/LocaleStore');

var { IntlMixin } = require('react-intl');

var messages = {};
messages.de = require('../messages/de');
messages.en = require('../messages/en');

var App = React.createClass({
	mixins: [IntlMixin],

	render() {
		return (
			<div>
				{React.cloneElement(this.props.children, messages[LocaleStore.getState().locale])}
			</div>
		)
	}
});

module.exports = App;