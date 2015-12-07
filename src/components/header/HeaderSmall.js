var React                  = require('react'),
    Link                   = require('../../components/Link'),
    HeaderLanguageSwitcher = require('./HeaderLanguageSwitcher');

var { FormattedMessage } = require('react-intl');

// ------------------------------------
var HeaderSmall = React.createClass({
	render() {
		return <section>
			<header className="header header--small">
				<div>
					<Link to="/">
						<img src="/images/logo.png" className="header-logo"/>
					</Link>
				</div>
			</header>
		</section>
	},
});

module.exports = HeaderSmall;