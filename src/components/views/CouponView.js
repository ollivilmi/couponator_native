import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StoreMenu from "./components/StoreMenu";
import { fetchCouponsForUser } from '../../actions/storeActions';
import { toggleNav } from '../../actions/viewActions';
import { CouponMenu } from "./components/CouponMenu";
import { View } from 'react-native';

class CouponView extends Component {
    render() {
        return (
            <View>
                {
                    this.props.navActive ? 
                    <StoreMenu title="Your coupons" verbose={false} clickHandler={this.props.fetchCouponsForUser}/> : 
                    <CouponMenu coupons={this.props.coupons} return={this.props.toggleNav}/>
                }
            </View>
        )
    }
}

CouponView.propTypes = {
    fetchCouponsForUser: PropTypes.func.isRequired,
    toggleNav: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    coupons: state.storeView.coupons,
    navActive: state.nav.navActive
});

export default connect(mapStateToProps, { fetchCouponsForUser, toggleNav })(CouponView);