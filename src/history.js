var { createHistory } = require('history');
var { useStandardScroll } = require('scroll-behavior');

module.exports = useStandardScroll(createHistory)();