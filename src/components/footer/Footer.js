var React = require('react');
var { FormattedHTMLMessage } = require('react-intl');

var Footer = React.createClass({
	render() {
		return <section className="contact">
			<img src="/images/nyanko.png" alt="" className="contact-nyanko"/>
			<div className="contact-facebook">
				<FormattedHTMLMessage id="facebook"/>
			</div>
			<img src="/images/collage.png" alt="" className="contact-collage"/>
		</section>
	}
});

module.exports = Footer;