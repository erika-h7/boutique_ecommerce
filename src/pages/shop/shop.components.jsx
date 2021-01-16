import React from 'react';

// data
import SHOP_DATA from './shop.data.js';

// components
import CollectionPreview from '../../components/collection-preview/collection-preview.components.jsx';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        // destructuring our collections
        const {collections} = this.state;
        return (
            <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
            </div>
        )
    }
}

export default ShopPage;