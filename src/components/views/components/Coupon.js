import React, {Component} from 'react';
import { View, Text, TouchableWithoutFeedback, Image, Modal } from 'react-native';
import { Styles } from "./assets/styles_coupon"

export class Coupon extends Component {
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
        return(
            <View style={Styles.coupon}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this.state.setModalVisible}}>
                    <TouchableWithoutFeedback onPress={() => this.setModalVisible()}>
                        <Image source={require('./assets/qr.png')} style={{marginTop: 50, width: "100%", height: 500}}/>
                    </TouchableWithoutFeedback>
                </Modal>
                <Text style={Styles.couponHeader}>{this.props.title}</Text>
                <Text style={Styles.font}>{this.props.description}</Text>
                <TouchableWithoutFeedback onPress={() => this.setModalVisible()}>
                    <Image source={require('./assets/qr.png')} style={{width: 125, height: 160}}/>
                </TouchableWithoutFeedback>
            </View>
        ) 
    }
}