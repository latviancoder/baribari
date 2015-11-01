var React         = require('react'),
    LanguageStore = require('../../stores/LanguageStore');

var { IntlMixin, FormattedMessage } = require('react-intl');

// ------------------------------------
var LandingHeader = React.createClass({
	mixins: [IntlMixin],

	_locales: ['en', 'de'],

	getInitialState() {
		return LanguageStore.getState()
	},

	render() {
		return <section>
			<div className="landing-fixed-background"></div>
			<header className="landing-header">
				<div>
					<div className="landing-languages">
						{this._locales.map(locale => {
							return (
								<span key={locale}
								      onClick={this.__onLanguageSelected.bind(this, locale)}
								      className={this.state.locale == locale ? 'active' : ''}>{locale}</span>
							)
						})}
					</div>
					<img src="images/logo.png" className="landing-header-logo"/>
					<h1 className="landing-header-slogan">
						{this.getIntlMessage('header.slogan')} <br/>
						{this.getIntlMessage('header.slogan2')}
					</h1>
				</div>
			</header>
		</section>
	},

	__onLanguageSelected(language) {
		if (language != this.state.locale) {
			window.location.href = '/' + language;
		}
	}
});

module.exports = LandingHeader;