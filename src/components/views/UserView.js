import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

import { fetchPurchases, addPurchase } from '../../actions/userActions';

class UserView extends Component {
    componentWillMount() {
        this.props.fetchPurchases(this.props.userId);
    }

    render() {
        return  (
            <View>
                <Button onPress={() => this.props.addPurchase(100, this.props.user._id, "5bad3754b4c4e700040eafd4")} title="create purchase for testing"/>
                <Text>This view is used for testing.</Text>
                <Text>User: {this.props.user.firstName} {this.props.user.lastName}</Text>
                <Text>Email: {this.props.user.email}</Text>
                <Text>User id: {this.props.user._id}</Text>
                <Text>Last Purchases: </Text>
                {
                    this.props.purchases.slice(0, 5).map((purchase, index) => {
                        return <Text key={index}>{purchase.price}€ {purchase.date}</Text>
                    })
                }
            </View>
        )
    }
}

UserView.propTypes = {
    fetchPurchases: PropTypes.func.isRequired,
    addPurchase: PropTypes.func.isRequired,
    purchases: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    user: state.user.current,
    userId: state.user.id,
    purchases: state.user.purchases
});

export default connect(mapStateToProps, { fetchPurchases, addPurchase })(UserView);
