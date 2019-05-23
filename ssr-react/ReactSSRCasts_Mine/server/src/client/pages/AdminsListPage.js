import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsList extends Component {
  renderAdmins() {
    return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>)
  }

  componentDidMount() {
    this.props.fetchAdmins();
  }

  render () {
    return (
      <div>
        <h3>Protected list of admins:</h3>
        <ul>
          {this.renderAdmins()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsList)),
  loadData,
};
