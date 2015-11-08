var React = require('react');

var { IntlMixin } = require('react-intl');

var LandingMailForm = React.createClass({
	mixins: [IntlMixin],

	render() {
		return <form action="" onSubmit={this.__onMailFormSubmitted}>

			<input type="email"
			       required="required"
			       ref="mailInput"
			       className="landing-mail-input"
			       placeholder={this.getIntlMessage('mail.placeholder')}/>

			<button type="submit" className="landing-mail-submit">
				{this.getIntlMessage('mail.submit')}
			</button>
		</form>
	},

	__onMailFormSubmitted(e) {
		e.preventDefault();

		this.props._addMail(this.refs.mailInput.value);
	}
});

module.exports = LandingMailForm;