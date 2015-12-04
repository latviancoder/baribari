var React       = require('react'),
    LocaleStore = require('../../stores/LocaleStore');

// ------------------------------------
var HeaderLanguageSwitch = React.createClass({
	getInitialState() {
		return LocaleStore.getState();
	},

	render() {
		return <div className="landing-languages">
			{this.state.supported_locales.map(locale => {
				return (
					<a
						href={`/${locale}`}
						key={locale}
						className={this.state.locale == locale ? 'active' : ''}
					>
						{locale}
					</a>
				)
			})}
		</div>
	}
});

module.exports = HeaderLanguageSwitch;