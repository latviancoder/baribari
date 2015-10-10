var React            = require('react'),
    ReactIntl        = require('react-intl'),

    IntlMixin        = ReactIntl.IntlMixin,
    FormattedMessage = ReactIntl.FormattedMessage;

var LandingHeader = React.createClass({
	mixins: [IntlMixin],

	render() {
		return (
			<header className="landing-header">
				<div className="landing-header-logo"></div>
				<h1 className="landing-header-slogan">
					<FormattedMessage message={this.getIntlMessage('header.slogan')}/>
				</h1>
			</header>
		)
	}
});

module.exports = LandingHeader;