import React from 'react';
import { Route } from 'react-router-dom';

// Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../../pages/collection/collection.components';

const ShopPage = ({ match }) => (
    
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);



export default ShopPage;