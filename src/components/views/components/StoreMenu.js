import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStores } from '../../../actions/storeActions';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { Styles } from "./assets/styles_store"

const Store = props => {
    return (
        <View style={Styles.store}>
            <TouchableHighlight onPress={props.toggleView}>
                <Text style={Styles.storeHeader}>{props.name}</Text>
            </TouchableHighlight>
            <View style={Styles.content}>
                <Text style={Styles.font}>{props.description}</Text>
                <Image source={require('./assets/shop.png')}/>
            </View>
        </View>
    )
}

class StoreMenu extends Component {
    componentWillMount() {
        this.props.fetchStores();
    }

    render() {
        return (
        <View>
            <Text style={Styles.mainHeader}>{this.props.title}</Text>
            {
                this.props.stores !== null ?
                this.props.stores.map((store, index) => {
                return (
                    <Store
                        key={index}
                        toggleView={() => this.props.clickHandler(store)} 
                        name={store.name}
                        description={store.description}
                    />
                    )
                })
                :
                <Text>Server error: unable to fetch stores</Text>
            }
        </View>
        )
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