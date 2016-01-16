var React         = require('react'),
    DocumentTitle = require('react-document-title'),
    HeaderSmall   = require('../../components/header/HeaderSmall');

var DetailsTea = React.createClass({

    render() {
        return <DocumentTitle title="Tea">
            <div>
                <HeaderSmall/>
                <div>
                    Tea set name
                </div>
                <br/><br/>
            </div>
        </DocumentTitle>;
    }
});

module.exports = DetailsTea;