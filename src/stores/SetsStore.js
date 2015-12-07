var alt = require('../alt'),
	SetsActions = require('../actions/SetsActions');

class SetsStore {

	constructor() {
		this.bindListeners({
			setActiveSet: SetsActions.SET_ACTIVE_SET,
			setList: SetsActions.SET_LIST,
		});

		this.state = {
			single: {},
			sets: []
		};
	}

	setActiveSet(single) {
		this.setState({single});
	}

	setList(sets) {
		this.setState({sets, single: {}});
	}
}

module.exports = alt.createStore(SetsStore, 'SetsStore');
