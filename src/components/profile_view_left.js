import React from 'react';
import {Link} from 'react-router-dom';
import CommentForm from './profile_comment_form'
import HomeIcon from '../images/home-icon.png'

const ProfileView = (props) => {
  return (
      <div className="profile-block">
        <Link className="home-link" to="/"><img className="home-link__image" src={HomeIcon} alt="home-link"/></Link>
        <img className="profile-block__image" src={props.image} alt={props.name}/>
        <div className="profile-block__title">
          <h2>{props.name}</h2>
        </div>
        <div className="profile-comments">
          <CommentForm userId={props.userId}/>
        </div>
      </div>
  )
}
export default ProfileView;
