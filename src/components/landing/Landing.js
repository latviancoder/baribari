var React            = require('react'),
    ReactIntl        = require('react-intl'),

    IntlMixin        = ReactIntl.IntlMixin,
    FormattedMessage = ReactIntl.FormattedMessage,

    LandingFooter    = require('./LandingFooter'),
    LandingHeader    = require('./LandingHeader');

var Landing = React.createClass({
	mixins: [IntlMixin],

	render() {
		return (
			<div>
				<LandingHeader/>
				<LandingFooter/>
			</div>
		)
	}
});

module.exports = Landing;