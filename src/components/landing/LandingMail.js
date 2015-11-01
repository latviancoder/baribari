var React = require('react');

var { IntlMixin, FormattedHTMLMessage } = require('react-intl');

var LandingMail = React.createClass({
	mixins: [IntlMixin],

	render() {
		return <section className="landing-mail">
			<div>
				<h2 className="landing-mail-soon">
					<FormattedHTMLMessage message={this.getIntlMessage('mail.soon')}/>
				</h2>
				<div className="landing-mail-form">
					<form action="">
						<input type="text" className="landing-mail-input" placeholder={this.getIntlMessage('mail.placeholder')}/>
						<button type="submit" className="landing-mail-submit">{this.getIntlMessage('mail.submit')}</button>
					</form>
				</div>
				<div className="landing-mail-nospam">
					{this.getIntlMessage('mail.nospam')}
				</div>
			</div>
		</section>
	}
});

module.exports = LandingMail;