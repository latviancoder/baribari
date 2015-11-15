var React = require('react');

var { FormattedMessage, injectIntl } = require('react-intl');

var LandingMailForm = React.createClass({
	render() {
		var { intl } = this.props;

		return <form onSubmit={this.__onMailFormSubmitted}>

			<input type="email"
			       required="required"
			       ref="mailInput"
			       className="landing-mail-input"
			       placeholder={intl.messages['mail.placeholder']}/>

			<button type="submit" className="landing-mail-submit">
				<FormattedMessage id="mail.submit"/>
			</button>
		</form>
	},

	__onMailFormSubmitted(e) {
		alert('111');
		e.preventDefault();
		alert('222');
		alert(e);
		alert(this.refs.mailInput);
		alert(this.refs.mailInput.value);
		this.props._addMail(this.refs.mailInput.value);
	}
});

module.exports = injectIntl(LandingMailForm);