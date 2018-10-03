import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleView } from '../actions/viewActions';
import { BOX_VIEW, COUPON_VIEW, STORE_VIEW, USER_VIEW } from '../actions/types';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { SimpleLineIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';


class Nav extends Component {
  render() {
    const { buttonStyle } = styles;

    return (
      <View style={styles.navMain}>
        {
          this.props.views.map((view) => {
            return (
              <TouchableOpacity activeOpacity={0.5} key={view.id} onPress={() => this.props.toggleView(view.type)} style={buttonStyle}>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                  <View style={{ alignSelf: 'center', marginTop: 15 }}>{view.icon}</View>
                  <View>
                    <Text style={styles.textStyle}>{view.text}</Text>
                  </View>
                </View>
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
    {
      id: 1,
      type: BOX_VIEW,
      text: 'Box',
      icon: <SimpleLineIcons name="social-dropbox" size={32} color="white" />
    },
    {
      id: 2,
      text: 'Coupon',
      icon: <MaterialIcons name="card-giftcard" size={32} color="white" />,
      type: COUPON_VIEW,
    },
    {
      id: 3,
      type: STORE_VIEW,
      text: 'Store',
      icon: <MaterialIcons name="local-grocery-store" size={32} color="white" />
    },
    {
      id: 4,
      type: USER_VIEW,
      icon: <FontAwesome name="user" size={32} color="white" />,
      text: 'User'
    }
  ]
});
const styles = StyleSheet.create({
  navMain: {
    flexDirection: 'row', marginTop: 0,
    flex: 1, position: 'relative', borderRadius: 5
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#6495ED',
    height: 70,
    marginBottom: 10

  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 3,
  }
})
export default connect(mapStateToProps, { toggleView })(Nav);
