var React = require('react');

var { FormattedHTMLMessage } = require('react-intl');

var LandingContact = React.createClass({
	render() {
		return <section className="landing-contact">
			<img src="images/nyanko.png" alt="" className="landing-contact-nyanko"/>
			<div className="landing-contact-facebook">
				<FormattedHTMLMessage id="facebook"/>
			</div>
			<img src="images/collage.png" alt="" className="landing-contact-collage"/>
		</section>
	}
});

module.exports = LandingContact;