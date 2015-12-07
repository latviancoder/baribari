var React          = require('react'),
    DocumentTitle  = require('react-document-title'),

    ComingSoonMail = require('../components/coming/ComingSoonMail'),
    Footer         = require('../components/footer/Footer'),
    LocaleStore    = require('../stores/LocaleStore');

var { IntlProvider, addLocaleData } = require('react-intl');

addLocaleData(require('react-intl/dist/locale-data/de'));

var messages = {
	de: require('../messages/messages_de'),
	en: require('../messages/messages_en')
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
			<DocumentTitle title={locale_messages.title}>
				<div className="app">
					<div className="fixed-background"></div>
					{React.cloneElement(this.props.children)}
					<ComingSoonMail/>
					<Footer/>
				</div>
			</DocumentTitle>
		</IntlProvider>
	}
});

module.exports = App;