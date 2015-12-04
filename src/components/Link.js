var React       = require('react'),
    LocaleStore = require('../stores/LocaleStore'),
    { Link } = require('react-router');

var MyLink = React.createClass({
	getInitialState() {
		return LocaleStore.getState();
	},

	render() {
		return <Link to={`/${LocaleStore.getState().locale}${this.props.to}`}>
			{this.props.children}
		</Link>;
	}
});

module.exports = MyLink;