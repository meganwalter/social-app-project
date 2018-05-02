import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchUsers } from '../actions'
import HomeUserView from './home_user_view'

class IndexPage extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return _.map(this.props.users, user => {
      return (
        <HomeUserView key={`user_${user.id}`} userId={user.id} name={user.name} image={user.image}/>
      )
    })
  }

  render() {
    return (
      <div className="inside-block">
        <div className="header-index">
          <h1 className="header-index__title">Welcome to the Social App</h1>
        </div>
        <div className="people-container">
          {this.renderUsers()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users}
}

export default connect(mapStateToProps, { fetchUsers })(IndexPage);
