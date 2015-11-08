var React           = require('react'),
    request         = require('superagent'),
    LocaleStore     = require('../../stores/LocaleStore'),
    LandingMailForm = require('./LandingMailForm');

var { IntlMixin, FormattedHTMLMessage } = require('react-intl');

var LandingMail = React.createClass({
	mixins: [IntlMixin],

	getInitialState() {
		return {
			submitted: false
		}
	},

	render() {
		return <section className="landing-mail">
			<div>
				<h2 className="landing-mail-soon">
					<FormattedHTMLMessage message={this.getIntlMessage('mail.soon')}/>
				</h2>
				<div className="landing-mail-form">
					{!this.state.submitted
						? <LandingMailForm _addMail={this._addMail}/>
						: <div className="landing-mail-success">{this.getIntlMessage('mail.success')}</div>}
				</div>
				<div className="landing-mail-nospam">
					{this.getIntlMessage('mail.nospam')}
				</div>
			</div>
		</section>
	},

	_addMail(email) {
		var locale = LocaleStore.getState();

		request
			.post('/api/test')
			.send({email, locale})
			.end();

		this.setState({submitted: true});
	}
});

module.exports = LandingMail;