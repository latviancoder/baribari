var React = require('react');

var { IntlMixin, FormattedMessage } = require('react-intl');

var LandingEngagement = React.createClass({
	mixins: [IntlMixin],

	render() {
		return <h2 className="landing-engagement" ref="container">
			<FormattedMessage message={this.getIntlMessage('engagement.slogan')}/>
		</h2>
	}
});

module.exports = LandingEngagement;