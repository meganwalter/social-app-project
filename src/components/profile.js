import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, postComment } from '../actions';
import ProfileComment from './profile_comment_view'
import ProfileViewLeft from './profile_view_left'

class ProfilePage extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  _generateNumericKey() {
    return Math.floor( Math.random() * new Date().getTime() )
  }

  _renderComments() {
    const reversed = this.props.user.posts.reverse();
    return reversed.map(( post ) => {
      return (
        <ProfileComment key={ `comment_${ this._generateNumericKey() }`} content={post.content} poster={post.poster}/>
      )
    })
  }

  render() {
    const { user } = this.props;

    if(!user) {
      return <div>Loading...</div>
    }

    return (
      <div className="inside-block inside-block--flex">
      <ProfileViewLeft image={user.image} name={user.name} userId={user.id} posts={this._renderComments}/>
        <div className="posts-block">
          <h1 className="posts-block__title">Posts</h1>
        {this._renderComments()}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }, ownProps) {
  const selectedUser = users[ownProps.match.params.id]

  return {
    user: selectedUser
  }
}

export default connect(mapStateToProps, { fetchUsers, postComment })(ProfilePage)
