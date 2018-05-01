import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postComment } from '../actions'

class CommentForm extends Component {

  renderCommentField(field) {
    return (
      <textarea
        placeholder="Leave a Comment..."
        className="profile-comments__input--text-area"
        max-length="250"
        type="text"
        {...field.input}>
      </textarea>
    )
  }

  renderBylineField(field) {
    return (
      <input
          placeholder="Your name please"
          max-length="25"
          className="profile-comments__input--byline"
          type="text"
          {...field.input}
        />
    )
  }

  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <form className="profile-comments__form" onSubmit={handleSubmit(onSubmit.bind(this))}>
        <Field
        name="content"
        component={this.renderCommentField}
      />
        <Field
        name="poster"
        component={this.renderBylineField}
      />
      <button className="profile-comments__post-button" type="submit">Post my Comment</button>
    </form>
    )
  }
}

export default reduxForm({
  form: 'CommentForm'
})(
  connect(null, { postComment })(CommentForm)
)
