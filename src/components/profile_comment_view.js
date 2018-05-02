import React from 'react';

const ProfileComment = (props) => {
  return (
    <div className="posts-block__post">
      <p className="posts-block__text">&quot;{props.content}&quot;</p>
      <p className="posts-block__byline">- {props.poster}</p>
    </div>
  )
}
export default ProfileComment;
