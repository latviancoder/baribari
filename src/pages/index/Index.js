var React          = require('react'),
    IndexSetsList  = require('./IndexSetsList'),
    ComingSoonMail = require('../../components/coming/ComingSoonMail'),
    Footer         = require('../../components/footer/Footer'),
    Header         = require('../../components/header/Header');

var Index = React.createClass({
	render() {
		return <div>
			<div className="fixed-background"></div>
			<Header/>
			<IndexSetsList/>
			<ComingSoonMail/>
			<Footer/>
		</div>;
	}
});

module.exports = Index;