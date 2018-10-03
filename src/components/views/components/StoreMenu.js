import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStores } from '../../../actions/storeActions';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

export const Store = props => {
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={require('./assets/shop.png')}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{props.name}</Text>
                    <Text>{props.description}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Button onPress={props.toggleView}>View</Button>
            </CardSection>
        </Card>

    )
}



const styles = StyleSheet.create({
        headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
})



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
