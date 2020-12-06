import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionsPage from '../../pages/collections/collections.component';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionsPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    }

    render(){
        const { loading } = this.state;
        const { match } = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => (<CollectionsOverviewWithSpinner isLoading={loading} {...props}/>)} />
                <Route path={`${match.path}/:collectionId`} render = {(props) => (<CollectionPageWithSpinner isLoading={loading} {...props}/>)}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
        dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);