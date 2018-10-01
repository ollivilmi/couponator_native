import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBoxes } from '../../actions/boxActions';
import Box from "./components/Box";
import { View } from 'react-native';


class BoxView extends Component {
    componentWillMount() {
        this.props.fetchBoxes(this.props.user);
    }

    render() {
        return  (
            <View>
                {
                    this.props.boxes.map((box, index) => (
                        <Box key={index} title={box.store} progress={box.progress}/>
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
    boxes: state.container.boxes,
    user: state.userDetails.user
});

export default connect(mapStateToProps, { fetchBoxes })(BoxView);
