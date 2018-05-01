import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, postComment } from '../actions';

import CommentForm from './comment_form'
import HomeIcon from '../images/home-icon.png'

class ProfilePage extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  onCommentSubmit = (values) => {
    const {id} = this.props.match.params;
    postComment(values, id)
  }

  renderComments() {
    const reversed = this.props.user.posts.reverse();
    return reversed.map((post) => {
      return (
        <div className="posts-block__post">
          <p className="posts-block__text">&quot;{post.content}&quot;</p>
          <p className="posts-block__byline">- {post.poster}</p>
        </div>
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
        <div className="profile-block">
          <Link className="home-link" to="/"><img className="home-link__image" src={HomeIcon}/></Link>
          <img className="profile-block__image" src={user.image} />
          <div className="profile-block__title">
            <h2>{user.name}</h2>
          </div>
          <div className="profile-comments">
            <CommentForm onSubmit={this.onCommentSubmit}/>
          </div>
        </div>
        <div className="posts-block">
          <h1 className="posts-block__title">Posts</h1>
        {this.renderComments()}
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
