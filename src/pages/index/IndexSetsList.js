var React     = require('react'),
    SetsStore = require('../../stores/SetsStore'),
    Link      = require('../../components/Link');

var IndexSetsList = React.createClass({
	getInitialState() {
		return SetsStore.getState()
	},

	render() {
		return <section className="sets-list-container">
			<div className="sets-list">
				{this.state.sets.map(s => {
					return <Link to="/details" key={s.name} className="sets-list-entry">
						<div className="sets-list-overlay">
							<div>
								<div className="label">{s.name}</div>
								<div className="price">{s.price}</div>
							</div>
						</div>
					</Link>
				})}
			</div>
		</section>;
	}
});

module.exports = IndexSetsList;