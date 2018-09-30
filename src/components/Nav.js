import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleView } from '../actions/viewActions';
import { BOX_VIEW, COUPON_VIEW, STORE_VIEW, USER_VIEW } from '../actions/types';
import { View } from 'react-native'
import { Button } from 'react-native-elements'

class Nav extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', marginTop: 25, justifyContent: 'center'}}>
        { 
          this.props.views.map((view, index) => {
            return (
              <Button key={index} title={view} onPress={() => this.props.toggleView(view)}></Button>
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
    BOX_VIEW, COUPON_VIEW, STORE_VIEW, USER_VIEW
  ]
});

export default connect(mapStateToProps, { toggleView })(Nav);