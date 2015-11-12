var React       = require('react'),
    LocaleStore = require('../stores/LocaleStore');

var { IntlProvider, addLocaleData } = require('react-intl');

addLocaleData(require('react-intl/dist/locale-data/de'));

var messages = {
	de: require('../messages/de'),
	en: require('../messages/en')
};

var flattenMessages = (nestedMessages, prefix = '') => {
	return Object.keys(nestedMessages).reduce((messages, key) => {
		var value = nestedMessages[key];
		var prefixedKey = prefix ? `${prefix}.${key}` : key;

		if (typeof value === 'string') {
			messages[prefixedKey] = value;
		} else {
			Object.assign(messages, flattenMessages(value, prefixedKey));
		}

		return messages;
	}, {});
};

var App = React.createClass({
	render() {
		var locale_messages = messages[LocaleStore.getState().locale];

		return <IntlProvider locale={LocaleStore.getState().locale} messages={flattenMessages(locale_messages)}>
			{React.cloneElement(this.props.children)}
		</IntlProvider>
	}
});

module.exports = App;