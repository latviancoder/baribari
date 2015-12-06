var React         = require('react'),
    IndexSetsList = require('./IndexSetsList'),
    Header        = require('../../components/header/Header');

var Index = React.createClass({
	render() {
		return <div>
			<Header/>
			<IndexSetsList/>
		</div>;
	}
});

module.exports = Index;