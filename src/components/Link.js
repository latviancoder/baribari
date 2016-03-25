var React       = require('react'),
    LocaleStore = require('../stores/LocaleStore'),
    { Link } = require('react-router');

var MyLink = React.createClass({
    getInitialState() {
        return LocaleStore.getState();
    },

    render() {
        if (this.props.to) {
            return <Link to={`/${LocaleStore.getState().locale}${this.props.to}`} className={this.props.className}>
                {this.props.children}
            </Link>;
        } else {
            return <div className={this.props.className}>{this.props.children}</div>;
        }
    }
});

module.exports = MyLink;