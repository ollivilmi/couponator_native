import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openBox } from '../../../actions/boxActions';

import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { Styles } from "./assets/styles_box"

class Box extends Component {
    render() {
        const amount = Math.floor(this.props.progress);
        const progress = this.props.progress - amount;
        return (
            <View style={Styles.box}>
                <Text style={Styles.header}>{this.props.title}</Text>
                <Progress.Bar progress={progress} width={null}/>
                <View>
                    <TouchableWithoutFeedback onPress={() => this.props.openBox(this.props.id, this.props.progress)}> 
                        <Image source={require('./assets/gift.png')}/>
                    </TouchableWithoutFeedback>
                    <Text style={Styles.amountText}>{amount > 0 ? `${amount} available` : "None available"}</Text>
                </View>
            </View>
        )
    }
}

Box.propTypes = {
    openBox: PropTypes.func.isRequired,
}

export default connect(null, { openBox })(Box);