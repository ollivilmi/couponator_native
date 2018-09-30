import React from 'react';

const Coupon = props => {
    return(
        <div className="col">
            <h4>{props.title}</h4>
            <p>Valid until {props.date}</p>
        </div>
    ) 
}

export const CouponMenu = props => {
    return (
        <div className="couponGrid">
            <button onClick={() => props.return()}>Return</button>
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
        </div>
    )
}