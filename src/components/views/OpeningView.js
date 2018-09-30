import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeBox } from '../../actions/boxActions';
import { View, Text, Modal } from 'react-native';
import { Button } from 'react-native-elements'

class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
        this.show = this.show.bind(this);
    }

    show() {
        this.setState((prevState, props) => {
            return {visible: true};
        });
    }

    render() {
        return (
            <View>
                {
                    this.state.visible ? <View><Text>{this.props.store}</Text><Text>{this.props.title}</Text></View> :
                    <Button onPress={this.show} title="Open"/>
                }
            </View>
        )
    }
}

class OpeningView extends Component {
    render() {
        console.log(this.props.coupons);
        return (
            <View style={{marginTop: 22}}>
                {
                this.props.coupons.map((coupon, index) => {
                    return <Coupon key={index} store={coupon.store} title={coupon.title} />
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
