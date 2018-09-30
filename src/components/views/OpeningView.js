import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeBox } from '../../actions/boxActions';

class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = { visibility: {display: "none"} }
        this.show = this.show.bind(this);
    }

    show() {
        this.setState((prevState, props) => {
            return {visibility: {display: "block"}};
        });
    }

    render() {
        return (
            <button onClick={this.show} className="btn btn-secondary btn-lg btn-block coupon">
                <div style={this.state.visibility}>
                    <h4>{this.props.store}</h4>
                    <p>{this.props.title}</p>
                </div>
            </button>
        )
    }
}

class OpeningView extends Component {
    render() {
        return (
            <div className="opening">
                {
                this.props.coupons.map((coupon, index) => {
                    return <Coupon key={coupon.id} store={coupon.store} title={coupon.title} />
                })
                }
                <button className="btn btn-primary btn-lg centered" onClick={() => this.props.closeBox()}>Close</button>
            </div>
        )
    }
}

OpeningView.propTypes = {
    closeBox: PropTypes.func.isRequired,
    coupons: PropTypes.array.isRequired
}
  
const mapStateToProps = state => ({
    coupons: state.container.coupons
});

export default connect(mapStateToProps, { closeBox })(OpeningView);
