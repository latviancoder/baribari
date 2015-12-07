var alt     = require('../alt'),
    request = require('superagent');

class SetsActions {

	setActiveSet(link) {
		request.get(`/api/sets/${link}`).end((err, res) => {
			this.dispatch(res.body);
		});
	}
	
	setList() {
		request.get(`/api/sets`).end((err, res) => {
			this.dispatch(res.body);
		});
	}

}

module.exports = alt.createActions(SetsActions);