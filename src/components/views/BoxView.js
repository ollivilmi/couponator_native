import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBoxes } from '../../actions/boxActions';
import Box from "./components/Box";
import '../styles/boxview.css';

class BoxView extends Component {
    componentWillMount() {
        this.props.fetchBoxes();
    }

    render() {
        return  (
            <div className="container bgWhite">
                {
                    this.props.boxes.map(box => (
                        <Box key={box.id} title={box.title} amount={box.amount} progress={box.progress}/>
                    ))
                }
            </div>
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
