import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBoxes } from '../../actions/boxActions';
import Box from "./components/Box";
import { ScrollView } from 'react-native';

class BoxView extends Component {
    componentWillMount() {
        this.props.fetchBoxes(this.props.user);
    }

    render() {
        return  (
            <ScrollView style={{borderColor: '#000', borderWidth: 1, padding: 15}}>
                {
                    this.props.boxes.map((box, index) => (
                        <Box key={index} id={box._id} title={box.store.name} progress={box.progress}/>
                    ))
                }
            </ScrollView>
        )
    }
}

BoxView.propTypes = {
    fetchBoxes: PropTypes.func.isRequired,
    boxes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    boxes: state.container.boxes,
    user: state.user.id
});

export default connect(mapStateToProps, { fetchBoxes })(BoxView);
