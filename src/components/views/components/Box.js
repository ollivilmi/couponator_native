import React, { Component } from 'react';
import '../../styles/box.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openBox } from '../../../actions/boxActions';

const ProgressBar = props => {
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={props.progress}
                aria-valuemin="0" aria-valuemax="100" style={{width:props.progress + "%"}}>
                    {props.progress}
            </div>
        </div>
    )
}

class Box extends Component {
    render() {
        return (
            <div className="row">
                <h4>{this.props.title}</h4>
                <ProgressBar progress={this.props.progress}/>
                <div className="boxWrapper">
                    <a onClick={() => this.props.openBox(this.props)}> 
                        <img className="align-self-center mr-3 boxImg" src="/images/gift.png" alt="Box"/>
                        <p><kbd>{this.props.amount > 0 ? `[${this.props.amount}] available` : "None available"}</kbd></p>
                    </a>
                </div>
            </div>
        )
    }
}

Box.propTypes = {
    openBox: PropTypes.func.isRequired,
}

export default connect(null, { openBox })(Box);