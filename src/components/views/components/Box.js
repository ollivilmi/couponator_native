import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openBox } from '../../../actions/boxActions';
import { Text, ProgressBarAndroid, Image, StyleSheet, View } from 'react-native';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button';
class Box extends Component {
    render() {
        const {           
            thumbnailContainerStyle,
            imageStyle
        } = styles;
        const amount = parseInt(this.props.progress);
        const progress = this.props - progress - amount;
        return (
            <Card>
                <Text>{this.props.title}</Text>
                <ProgressBarAndroid styleAttr="Horizontal" progress={progress} />
                <CardSection>
                    <Image source={require('./assets/gift.png')} style={imageStyle} />
                </CardSection>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Text style={{fontWeight: '600'}}>{amount > 0 ? `[${amount}] available` : "None available"}</Text>
                    </View>                  
                     <Button onPress={() => this.props.openBox(this.props.user)}>Got it!</Button>
                </CardSection>
            </Card>
        )
    }
}

Box.propTypes = {
    openBox: PropTypes.func.isRequired,
}
const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
})



export default connect(null, { openBox })(Box);