import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCouponsForUser } from '../../actions/storeActions';
import { toggleNav } from '../../actions/viewActions';
import { CouponMenu } from "./components/CouponMenu";

// This class is a WIP
// todo: filtering coupons
class CouponView extends Component {
    componentWillMount() {
        this.props.fetchCouponsForUser(this.props.user);
    }

    render() {
        return <CouponMenu coupons={this.props.coupons}/>
    }
}

CouponView.propTypes = {
    fetchCouponsForUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    coupons: state.storeView.coupons,
    user: state.user.id
});

export default connect(mapStateToProps, { fetchCouponsForUser, toggleNav })(CouponView);