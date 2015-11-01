var React = require('react');

var { IntlMixin, FormattedHTMLMessage } = require('react-intl');

var LandingEngagement = React.createClass({
	mixins: [IntlMixin],

	render() {
		return <h2 className="landing-engagement" ref="container">
			<FormattedHTMLMessage message={this.getIntlMessage('engagement.slogan')}/>
		</h2>
	}
});

module.exports = LandingEngagement;