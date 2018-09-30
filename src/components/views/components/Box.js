import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openBox } from '../../../actions/boxActions';

import { View, Text, ProgressBarAndroid, TouchableOpacity, Image } from 'react-native';

class Box extends Component {
    render() {
        const amount = parseInt(this.props.progress);
        const progress = this.props-progress - amount;

        return (
            <View>
                <Text>{this.props.store}</Text>
                <ProgressBarAndroid styleAttr="Horizontal" progress={progress}/>
                <View>
                    <TouchableOpacity onPress={() => this.props.openBox(this.props)}> 
                        <Image source={require('./assets/gift.png')} style={{width: 40, height: 40}}/>
                    </TouchableOpacity>
                    <Text>{amount > 0 ? `[${amount}] available` : "None available"}</Text>
                </View>
            </View>
        )
    }
}

Box.propTypes = {
    openBox: PropTypes.func.isRequired,
}

export default connect(null, { openBox })(Box);