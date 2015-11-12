var React             = require('react'),
    LandingHeader     = require('./LandingHeader'),
    LandingEngagement = require('./LandingEngagement'),
    LandingMail       = require('./LandingMail'),
    LandingContact    = require('./LandingContact');

// ------------------------------------
var Landing = React.createClass({
	render() {
		return <div>
			<LandingHeader/>
			<LandingEngagement/>
			<LandingMail/>
			<LandingContact/>
		</div>
	}
});

module.exports = Landing;