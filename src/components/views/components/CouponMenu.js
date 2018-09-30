import React from 'react';
import { Button } from 'react-native-elements'
import { View, Text } from 'react-native';



const Coupon = props => {
    return(
        <View>
            <Text>{props.title}</Text>
            <Text>Valid until {props.date}</Text>
        </View>
    ) 
}

export const CouponMenu = props => {
    return (
        <View>
            <Button onPress={() => props.return()}/>
            {
                props.coupons.map((coupon, index) => {
                    return (
                        <Coupon
                            key={index}
                            title={coupon.title}
                            date={coupon.date}
                        />
                    )
                })
            }
        </View>
    )
}