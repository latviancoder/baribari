var React            = require('react'),
    ReactIntl        = require('react-intl'),
    LanguageStore    = require('../../stores/LanguageStore'),

    IntlMixin        = ReactIntl.IntlMixin,
    FormattedMessage = ReactIntl.FormattedMessage;

var LandingHeader = React.createClass({
	mixins: [IntlMixin],

	getInitialState() {
		return {}
	},

	render() {
		return (
			<header className="landing-header">
				<div className="landing-header-logo"></div>
				<h1 className="landing-header-slogan">
					<FormattedMessage message={this.getIntlMessage('header.slogan')}/> <br/>
					<FormattedMessage message={this.getIntlMessage('header.slogan2')}/>
				</h1>
			</header>
		)
	}
});

module.exports = LandingHeader;