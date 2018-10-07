import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StoreMenu from "./components/StoreMenu";
import { fetchCouponsForStore } from '../../actions/storeActions';
import { toggleNav } from '../../actions/viewActions';
import { CouponMenu } from "./components/CouponMenu";
import { View, Button } from 'react-native';

class StoreView extends Component {
    render() {
        return (
            <View>
                {
                    this.props.navActive ? 
                    <StoreMenu title="Nearby stores" clickHandler={this.props.fetchCouponsForStore}/> :
                    <View style={{marginTop: 30}}>
                        <Button style={{fontSize: 30}} title="Return" onPress={() => this.props.toggleNav()}/>
                        <CouponMenu coupons={this.props.coupons}/>
                    </View>
                }
            </View>
        )
    }
}

StoreView.propTypes = {
    fetchCouponsForStore: PropTypes.func.isRequired,
    toggleNav: PropTypes.func.isRequired,
    coupons: PropTypes.array
}

const mapStateToProps = state => ({
    coupons: state.storeView.coupons,
    navActive: state.nav.navActive
});

export default connect(mapStateToProps, { fetchCouponsForStore, toggleNav })(StoreView);