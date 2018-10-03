import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeBox } from '../../actions/boxActions';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation, ScrollView, StyleSheet
} from 'react-native';
import Button from './components/Button';
import CardSection from './components/CardSection';
class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
    }


    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription = () => {
        this.setState({ visible: true })
    }

    render() {
        let description = null;
        if (this.state.visible) {

            description = <CardSection>
                <Text style={{ flex: 1, fontSize: 30 }}>
                    {this.props.store}
                </Text>
            </CardSection>
        }
        const { titleStyle } = styles;
        return (
            <View style={{ flex: 1 }}>

                <TouchableWithoutFeedback
                    onPress={this.renderDescription}>
                    <View>
                        <CardSection>
                            <Text style={titleStyle}>
                                Press to Show
{/*                                 {this.props.title}
 */}                            </Text>
                        </CardSection>
                        {description}
                    </View>

                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        paddingLeft: 10,
        paddingRight: 10
    },

})

class OpeningView extends Component {
    render() {
        return (
            <View>
                <ScrollView >
                    {
                        this.props.coupons.map((coupon, index) => {
                            return <Coupon key={index} store={coupon.store} title={coupon.title} />
                        })
                    }
                    <Button onPress={() => this.props.closeBox()}>Back</Button>
                </ScrollView>
            </View>
        )
    }
}

OpeningView.propTypes = {
    closeBox: PropTypes.func.isRequired,
    coupons: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    coupons: state.container.coupons,
});

export default connect(mapStateToProps, { closeBox })(OpeningView);
