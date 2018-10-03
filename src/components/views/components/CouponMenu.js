import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import { Styles } from "./assets/styles_coupon"

const Coupon = props => {
    return(
        <View style={Styles.coupon}>
            <Text style={Styles.couponHeader}>{props.title}</Text>
            <TouchableHighlight>
                <Image source={require('./assets/qr.png')} style={{width: 125, height: 160}}/>
            </TouchableHighlight>
        </View>
    ) 
}

export const CouponMenu = props => {
    return (
        <View style={Styles.container}>
            {
                props.coupons !== null ?
                props.coupons.map((coupon, index) => {
                    return (
                        <Coupon
                            key={index}
                            title={coupon.title}
                            date={coupon.date}
                        />
                    )
                })
                :
                <Text>Server error: unable to fetch coupons</Text>
            }
        </View>
    )
}