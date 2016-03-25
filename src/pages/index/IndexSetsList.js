var React      = require('react'),
    classNames = require('classnames'),
    Link       = require('../../components/Link'),
    sets       = require('../../data/sets');

var { FormattedMessage, FormattedNumber } = require('react-intl');

var IndexSetsList = React.createClass({
    render() {
        return <div className="container">
            {sets.map(product => {

                var entryPictureClass = classNames({
                    'sets-entry-picture': true,
                    [product.id]: true,
                    disabled: !product.enabled
                });

                var entryPrice = product.price
                    ? <FormattedNumber value={product.price} style="currency" currency="EUR"/>
                    : <FormattedMessage id="coming"/>;

                var entryLink = product.enabled ? `/details/${product.id}` : undefined;

                return <Link to={entryLink} key={product.id} className='sets-entry'>
                    <div className={entryPictureClass}></div>
                    <div className="sets-entry-description">
                        <div className="label">{product.label}</div>
                        <div className="price">{entryPrice}</div>
                    </div>
                </Link>
            })}
        </div>;
    }
});

module.exports = IndexSetsList;