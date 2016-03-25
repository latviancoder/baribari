var React = require('react'),
    sets  = require('../../data/sets');

var pages = {
    'tea-for-two': require('./DetailsTea')
};

var Details = React.createClass({
    render() {
        return React.createElement(
            pages[this.props.params.link],
            sets.find(s => s.id == this.props.params.link)
        );
    }
});

module.exports = Details;