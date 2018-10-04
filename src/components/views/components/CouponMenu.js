import React, {Component} from 'react';
import { Modal, ScrollView, View, Text, TouchableHighlight, Image } from 'react-native';

import { Styles } from "./assets/styles_coupon"

class Coupon extends Component {
    render() {
        return(
            <View style={Styles.coupon}>
                <Text style={Styles.couponHeader}>{this.props.title}</Text>
                <TouchableHighlight onPress={() => this.props.onPress()}>
                    <Image source={require('./assets/qr.png')} style={{width: 125, height: 160}}/>
                </TouchableHighlight>
            </View>
        ) 
    }
}

export class CouponMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.setModalVisible = this.setModalVisible.bind(this);
    }

    setModalVisible() {
        this.setState((prevState, props) => {
            return {modalVisible: !prevState.modalVisible};
        });
    }

    render() {
    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {this.state.setModalVisible}}>
                <TouchableHighlight onPress={() => this.setModalVisible()}>
                    <Image source={require('./assets/qr.png')} style={{marginTop: 50, width: "100%", height: 500}}/>
                </TouchableHighlight>
            </Modal>
            {
                this.props.coupons !== null ?
                this.props.coupons.map((coupon, index) => {
                    return (
                        <Coupon
                            key={index}
                            title={coupon.title}
                            date={coupon.date}
                            onPress={this.setModalVisible}
                        />
                    )
                })
                :
                <Text>Server error: unable to fetch coupons</Text>
            }
        </ScrollView>
    )
    }
}