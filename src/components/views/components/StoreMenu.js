import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStores } from '../../../actions/storeActions';
import { Button } from 'react-native-elements'
import { View, Text } from 'react-native';

export const Store = props => {
    return (
        <View>
            <Button onPress={props.toggleView} title={props.name}/>
            <Text>{props.description}</Text>
        </View>
    )
}

class StoreMenu extends Component {
    componentWillMount() {
        this.props.fetchStores();
    }

    render() {
        return this.props.stores.map((store, index) => {
            return (
                <Store
                    key={index}
                    toggleView={() => this.props.clickHandler(store)} 
                    name={store.name} 
                    description={store.description} 
                    details={store.details} 
                />
            )
        })
    }
}

StoreMenu.propTypes = {
    fetchStores: PropTypes.func.isRequired,
    stores: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    stores: state.storeView.stores,
});

export default connect(mapStateToProps, { fetchStores })(StoreMenu);