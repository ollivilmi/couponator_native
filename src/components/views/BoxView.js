import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBoxes } from '../../actions/boxActions';
import Box from "./components/Box";
import { View } from 'react-native';


class BoxView extends Component {
    componentWillMount() {
        this.props.fetchBoxes();
    }

    render() {
        return  (
            <View>
                {
                    this.props.boxes.map((box, index) => (
                        <Box key={index} title={box.title} amount={box.amount} progress={box.progress}/>
                    ))
                }
            </View>
        )
    }
}

BoxView.propTypes = {
    fetchBoxes: PropTypes.func.isRequired,
    boxes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    boxes: state.container.boxes
});

export default connect(mapStateToProps, { fetchBoxes })(BoxView);
