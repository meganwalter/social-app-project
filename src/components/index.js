import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { fetchUsers } from '../actions'

class IndexPage extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return _.map(this.props.users, user => {
      return (
        <div key={user.id} className="people-container__person">
          <Link to={`/users/${user.id}`}>
            <img className="people-container__person--image" src={user.image} />
          </Link>
          <p>{user.name}</p>
        </div>
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
