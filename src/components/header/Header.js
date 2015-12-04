var React                  = require('react'),
    HeaderLanguageSwitcher = require('./HeaderLanguageSwitcher');

var { FormattedMessage } = require('react-intl');

// ------------------------------------
var Header = React.createClass({
	render() {
		return <section>
			<header className="landing-header">
				<div>
					<HeaderLanguageSwitcher/>

					<img src="/images/logo.png" className="landing-header-logo"/>

					<h1 className="landing-header-slogan">
						<FormattedMessage id="header.slogan"/>
						<br/>
						<FormattedMessage id="header.slogan2"/>
					</h1>
				</div>
			</header>
		</section>
	},
});

module.exports = Header;