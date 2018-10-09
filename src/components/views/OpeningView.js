import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeBox, openCoupon } from '../../actions/boxActions';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import CardFlip from "react-native-card-flip";
import { Coupon } from "./components/Coupon";
import { Styles } from "./components/assets/styles_store.js";

class CouponReveal extends Component {
    render() {
        let count = 1;
        return (
            <View>
                <CardFlip style={{height: 300, width: 220 }} ref={(card) => this.card = card} >
                    <TouchableOpacity onPress=
                        {() => { 
                            count-- > 0 ? this.card.jiggle({count: 1, duration: 100, progress: 0.05}) :
                            this.card.flip()}
                        } >
                        <Image source={require('./components/assets/gift.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.card.flip(); this.props.next()}} >
                        <Coupon title={this.props.name} description={this.props.description} image={this.props.image}/>
                    </TouchableOpacity>
                </CardFlip>
            </View>
        )
    }
}

class OpeningView extends Component {
    render() {
        return (
            <View style={{marginTop: 30}}>
                {
                    this.props.coupons.length > 0 ?
                    <CouponReveal name={this.props.coupons[0].store.name} description={this.props.coupons[0].title} image={this.props.coupons[0].img} next={this.props.openCoupon} />
                    : <Text style={Styles.mainHeader}>Empty!</Text>
                }
                <TouchableOpacity onPress={() => this.props.closeBox()}>
                    <Text style={Styles.exitButton}>Exit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

OpeningView.propTypes = {
    closeBox: PropTypes.func.isRequired,
    openCoupon: PropTypes.func.isRequired,
    coupons: PropTypes.array.isRequired
}
  
const mapStateToProps = state => ({
    coupons: state.container.coupons,
});

export default connect(mapStateToProps, { closeBox, openCoupon })(OpeningView);
