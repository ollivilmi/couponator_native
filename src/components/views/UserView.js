import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { fetchPurchases } from '../../actions/userActions';

class UserView extends Component {
    componentWillMount() {
        this.props.fetchPurchases(this.props.user._id);
    }

    render() {
        return  (
            <View>
                <Text>This view is used for testing. Todo: add purchase with QR and list recent purchases</Text>

                <Text>User: {this.props.user.firstName} {this.props.user.lastName}</Text>
                <Text>Email: {this.props.user.email}</Text>
                <Text>User id: {this.props.user._id}</Text>
                <Text>Purchases: </Text>
                {
                    this.props.purchases.map((purchase, index) => {
                        return <Text key={index}>{purchase.price}€ {purchase.date}</Text>
                    })
                }
            </View>
        )
    }
}

UserView.propTypes = {
    fetchPurchases: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    purchases: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    user: state.user.current,
    purchases: state.user.purchases
});

export default connect(mapStateToProps, { fetchPurchases })(UserView);
