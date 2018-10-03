import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleView } from '../actions/viewActions';
import { BOX_VIEW, COUPON_VIEW, STORE_VIEW, USER_VIEW } from '../actions/types';
import { View, TouchableOpacity, Text } from 'react-native'
import { Styles } from './assets/styles_nav';

class Nav extends Component {
  render() {
    return (
      <View style={Styles.nav}>
        { 
          this.props.views.map((view, index) => {
            return (
              <TouchableOpacity key={index}  onPress={() => this.props.toggleView(view)}>
                <Text style={view === this.props.view ? Styles.navFontActive : Styles.navFont}>{view}</Text>
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
    BOX_VIEW, USER_VIEW, COUPON_VIEW, STORE_VIEW
  ]
});

export default connect(mapStateToProps, { toggleView })(Nav);