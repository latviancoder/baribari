var React          = require('react'),
    IndexSetsList  = require('./IndexSetsList'),
    ComingSoonMail = require('../../components/coming/ComingSoonMail'),
    Footer         = require('../../components/footer/Footer'),
    Header         = require('../../components/header/Header');

var Index = React.createClass({
	render() {
		return <div>
			<Header/>
			<IndexSetsList/>
		</div>;
	}
});

module.exports = Index;