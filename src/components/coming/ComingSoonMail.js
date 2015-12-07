var React              = require('react'),
    request            = require('superagent'),
    LocaleStore        = require('../../stores/LocaleStore'),
    ComingSoonMailForm = require('./ComingSoonMailForm');

var { FormattedHTMLMessage, FormattedMessage } = require('react-intl');

var ComingSoonMail = React.createClass({
	getInitialState() {
		return {
			submitted: false
		}
	},

	render() {
		return <section className="mail">
			<div>
				<h2 className="mail-soon">
					<FormattedHTMLMessage id="mail.soon"/>
				</h2>
				<div className="mail-form">
					{!this.state.submitted
						? <ComingSoonMailForm _addMail={this._addMail}/>
						: <div className="mail-success"><FormattedMessage id="mail.success"/></div>}
				</div>
				<div className="mail-nospam">
					<FormattedMessage id="mail.nospam"/>
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

module.exports = ComingSoonMail;