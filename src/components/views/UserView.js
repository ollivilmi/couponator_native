import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class UserView extends Component {
    render() {
        return  (
            <View>
                <Text>This view is used for testing. Todo: add purchase with QR and list recent purchases</Text>

                <Text>User: {this.props.user.firstName} {this.props.user.lastName}</Text>
                <Text>Email: {this.props.user.email}</Text>
                <Text>User id: {this.props.user._id}</Text>
                <Text>Purchases: </Text>
                {
                    this.props.user.purchases.map((purchase, index) => {
                        return <Text key={index}>{purchase}</Text>
                    })
                }
            </View>
        )
    }
}

UserView.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user.current
});

export default connect(mapStateToProps)(UserView);
