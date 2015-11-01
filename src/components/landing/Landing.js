var React             = require('react'),
    LandingMail       = require('./LandingMail'),
    LandingEngagement = require('./LandingEngagement'),
    LandingContact    = require('./LandingContact'),
    LandingHeader     = require('./LandingHeader');

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