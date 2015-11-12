var React = require('react');

var { FormattedHTMLMessage } = require('react-intl');

var LandingEngagement = React.createClass({
	render() {
		return <h2 className="landing-engagement" ref="container">
			<FormattedHTMLMessage id='engagement.slogan'/>
		</h2>
	}
});

module.exports = LandingEngagement;