import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleView } from '../actions/viewActions';
import { BOX_VIEW, COUPON_VIEW, STORE_VIEW, USER_VIEW, PURCHASE_VIEW } from '../actions/types';
import { View, TouchableOpacity, Text } from 'react-native'

class Nav extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', marginTop: 25, justifyContent: 'space-between'}}>
        { 
          this.props.views.map((view, index) => {
            return (
              <TouchableOpacity key={index}  onPress={() => this.props.toggleView(view)}>
                <Text>{view}</Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    )
  }
}

Nav.propTypes = {
  toggleView: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  views: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  view: state.nav.view,
  views: [
    BOX_VIEW, PURCHASE_VIEW, COUPON_VIEW, STORE_VIEW, USER_VIEW
  ]
});

export default connect(mapStateToProps, { toggleView })(Nav);