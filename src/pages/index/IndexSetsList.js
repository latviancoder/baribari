var React       = require('react'),
    Link        = require('../../components/Link');

var IndexSetsList = React.createClass({

    render() {
        return <section className="sets-list-container">
            <div className="sets-list">
                <Link to="/details/tea-for-two" className="sets-list-entry">
                    <div className="sets-list-overlay">
                        <div>
                            <div className="label">test label</div>
                            <div className="price">100</div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>;
    }
});

module.exports = IndexSetsList;