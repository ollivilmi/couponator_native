import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { BOX_VIEW, STORE_VIEW, COUPON_VIEW, USER_VIEW, OPENING_VIEW } from '../actions/types';
import Nav from "./Nav";
import BoxView from "./views/BoxView";
import StoreView from "./views/StoreView";
import OpeningView from "./views/OpeningView";
import CouponView from "./views/CouponView";
import { UserView } from "./views/UserView";
import { View } from 'react-native';

class Container extends Component {
    getView() {
        switch (this.props.view) {
            case BOX_VIEW:
                return <BoxView />
            case STORE_VIEW:
                return <StoreView />
            case COUPON_VIEW:
                return <CouponView />
            case USER_VIEW:
                return <UserView />
            case OPENING_VIEW:
                return <OpeningView />
            default:
                return <p>Internal error</p>
        }
    }

    render() {
        return (
            <View>
                { this.props.navActive ? <Nav/> : null }
                <View style={{marginTop: 25}}>
                    { this.getView() }
                </View>
            </View>
        )
    }
}

Container.propTypes = {
    view: PropTypes.string.isRequired,
    navActive: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    view: state.nav.view,
    navActive: state.nav.navActive
});


export default connect(mapStateToProps)(Container);