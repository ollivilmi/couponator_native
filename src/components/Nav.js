import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleView } from '../actions/viewActions';
import { BOX_VIEW, COUPON_VIEW, STORE_VIEW, USER_VIEW } from '../actions/types';
import { List, ListItem, Button } from 'react-native-elements'

class Nav extends Component {
  mapViews = () => {
    return this.props.views.map((view, index) => {
      return (
        <ListItem key={index}>
          <Button title={view} onPress={() => this.props.toggleView(view)}></Button>
        </ListItem>
        );
      });
  }

  render() {
    return (
      <List className="nav nav-pills nav-fill">
        { this.mapViews() }
      </List>
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