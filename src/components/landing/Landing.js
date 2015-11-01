var React             = require('react'),
    LandingHeader     = require('./LandingHeader'),
    LandingEngagement = require('./LandingEngagement'),
    LandingMail       = require('./LandingMail'),
    LandingContact    = require('./LandingContact');

var { IntlMixin } = require('react-intl');

// ------------------------------------
var Landing = React.createClass({
	mixins: [IntlMixin],

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