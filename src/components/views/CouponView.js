import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StoreMenu from "./components/StoreMenu";
import { fetchCouponsForUser } from '../../actions/storeActions';
import { toggleNav } from '../../actions/viewActions';
import { CouponMenu } from "./components/CouponMenu";

// Basically the same as StoreView as of now - could use the same component with different props.
// Separate files as it may not be the case in the future / follows the convention used so far
class CouponView extends Component {
    render() {
        return (
            <div className="container">
                {
                    this.props.navActive ? 
                    <StoreMenu clickHandler={this.props.fetchCouponsForUser}/> : 
                    <CouponMenu coupons={this.props.coupons} return={this.props.toggleNav}/>
                }
            </div>
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