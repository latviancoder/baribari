var React = require('react');

var { IntlMixin, FormattedHTMLMessage } = require('react-intl');

var LandingContact = React.createClass({
	mixins: [IntlMixin],

	render() {
		return <section className="landing-contact">
			<img src="images/nyanko.png" alt="" className="landing-contact-nyanko"/>
			<div className="landing-contact-facebook">
				<FormattedHTMLMessage message={this.getIntlMessage('facebook')}/>
			</div>
			<img src="images/collage.png" alt="" className="landing-contact-collage"/>
		</section>
	}
});

module.exports = LandingContact;