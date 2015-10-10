var React             = require('react'),
    ReactIntl         = require('react-intl'),

    HelloStore        = require('../stores/HelloStore'),

    IntlMixin         = ReactIntl.IntlMixin,
    FormattedDate     = ReactIntl.FormattedDate,
    FormattedRelative = ReactIntl.FormattedRelative;

var App = React.createClass({
	mixins: [IntlMixin],


	getInitialState() {
		return HelloStore.getState()
	},

	render() {
		return (
			<div>
				{`Hello, ${this.state.name}`} <br/><br/>

				<br/><br/>

				<FormattedDate value="2015-01-01" day="numeric" month="long" year="numeric"/>
				<FormattedRelative value="2015-01-01"/>
			</div>
		)
	}
});

module.exports = App;