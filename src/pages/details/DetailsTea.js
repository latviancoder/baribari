var React         = require('react'),
    DocumentTitle = require('react-document-title'),
    HeaderSmall   = require('../../components/header/HeaderSmall');

var { FormattedMessage } = require('react-intl');

var DetailsTea = React.createClass({

    render() {
        console.log(this.props)
        return <DocumentTitle title={this.props.label}>
            <div className="page--details">
            <HeaderSmall/>
                <div className="container">
                    <div className="set">
                        <div className="set-picture"></div>
                        <div className="set-info">
                            <h1 className="set-heading">{this.props.label}</h1>
                            <div className="set-price">{this.props.price}</div>
                            <div className="set-contains">info</div>
                        </div>
                    </div>
                </div>
            </div>
        </DocumentTitle>;
    }
});

module.exports = DetailsTea;