var React         = require('react'),
    DocumentTitle = require('react-document-title'),
    HeaderSmall   = require('../../components/header/HeaderSmall');

var { FormattedMessage, FormattedNumber } = require('react-intl');

var DetailsTea = React.createClass({

    render() {
        return <DocumentTitle title={this.props.label}>
            <div className="page--details">
                <HeaderSmall/>
                <div className="container">
                    <div className="back">&larr; <FormattedMessage id="backToGifts"/></div>
                    <div className="set">
                        <div className="set-picture"></div>
                        <div className="set-info">
                            <h1 className="set-heading">{this.props.label}</h1>
                            <div className="set-price">
                                <FormattedNumber value={this.props.price} style="currency" currency="EUR"/>
                            </div>
                            <div className="set-contains">info</div>
                            <button className="button" type="button">
                                <FormattedMessage id="addToCart"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DocumentTitle>;
    }
});

module.exports = DetailsTea;