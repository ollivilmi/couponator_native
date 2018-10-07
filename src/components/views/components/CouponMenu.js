import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';

import { Styles } from "./assets/styles_coupon"
import { Coupon } from "./Coupon";

export class CouponMenu extends Component {
    render() {
        console.log(this.props.coupons);
        return (
            <ScrollView contentContainerStyle={Styles.container}>
                {
                    this.props.coupons.length > 0 ?
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
                    <Text>Sorry! No coupons found.</Text>
                }
            </ScrollView>
        )
    }
}