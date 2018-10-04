import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';

import { Styles } from "./assets/styles_coupon"
import { Coupon } from "./Coupon";

export class CouponMenu extends Component {


    render() {
    return (
        <ScrollView contentContainerStyle={Styles.container}>
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