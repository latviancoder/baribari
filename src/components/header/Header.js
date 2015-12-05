var React                  = require('react'),
    HeaderLanguageSwitcher = require('./HeaderLanguageSwitcher');

var { FormattedMessage } = require('react-intl');

// ------------------------------------
var Header = React.createClass({
	render() {
		return <section>
			<header className="header">
				<div>
					<HeaderLanguageSwitcher/>

					<img src="/images/logo.png" className="header-logo"/>

					<h1 className="header-slogan">
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