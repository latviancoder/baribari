var React         = require('react'),
    DocumentTitle = require('react-document-title'),
    HeaderSmall   = require('../../components/header/HeaderSmall'),
    Footer        = require('../../components/footer/Footer'),
    SetsStore     = require('../../stores/SetsStore'),
    SetsActions   = require('../../actions/SetsActions'),
    Header        = require('../../components/header/Header');

var Details = React.createClass({

	getInitialState() {
		return SetsStore.getState();
	},

	render() {
		return <DocumentTitle title={this.state.single.name || ''}>
			<div>
				<HeaderSmall/>
				<div>
					{this.state.single.name}
				</div>
				<br/><br/>
			</div>
		</DocumentTitle>;
	},

	__onSetsStoreChanged() {
		this.setState(SetsStore.getState());
	},

	componentDidMount() {
		SetsActions.setActiveSet(this.props.params.link);
		SetsStore.listen(this.__onSetsStoreChanged);
	},

	componentWillUnmount() {
		SetsStore.unlisten(this.__onSetsStoreChanged);
	}
});

module.exports = Details;