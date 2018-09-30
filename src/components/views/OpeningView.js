import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeBox } from '../../actions/boxActions';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'


class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = { visibility: {display: "none"} }
        this.show = this.show.bind(this);
    }

    show() {
        this.setState((prevState, props) => {
            return {visibility: {display: "block"}};
        });
    }

    render() {
        // ?
        return (
            <Button onPress={this.show} title={this.props.store}>
                <View style={this.state.visibility}>
                    <Text>{this.props.store}</Text>
                    <Text>{this.props.title}</Text>
                </View>
            </Button>
        )
    }
}

class OpeningView extends Component {
    render() {
        return (
            <View>
                {
                this.props.coupons.map((coupon, index) => {
                    return <Coupon key={coupon.id} store={coupon.store} title={coupon.title} />
                })
                }
                <Button onPress={() => this.props.closeBox()} title="Close"></Button>
            </View>
        )
    }
}

OpeningView.propTypes = {
    closeBox: PropTypes.func.isRequired,
    coupons: PropTypes.array.isRequired
}
  
const mapStateToProps = state => ({
    coupons: state.container.coupons
});

export default connect(mapStateToProps, { closeBox })(OpeningView);
