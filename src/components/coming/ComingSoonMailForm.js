var React = require('react');

var { FormattedMessage, injectIntl } = require('react-intl');

var IndexMailForm = React.createClass({
	render() {
		var { intl } = this.props;

		return <form onSubmit={this.__onMailFormSubmitted}>

			<input type="email"
			       required="required"
			       ref="mailInput"
			       className="mail-input"
			       placeholder={intl.messages['mail.placeholder']}/>

			<button type="submit" className="mail-submit">
				<FormattedMessage id="mail.submit"/>
			</button>
		</form>
	},

	__onMailFormSubmitted(e) {
		e.preventDefault();

		this.props._addMail(this.refs.mailInput.value);
	}
});

module.exports = injectIntl(IndexMailForm);