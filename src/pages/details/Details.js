var React = require('react');

var pages = {
    'tea-for-two': require('./DetailsTea')
};

var Details = React.createClass({

    render() {
        return React.createElement(pages[this.props.params.link]);
    }

});

module.exports = Details;