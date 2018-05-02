import React from 'react';
import { Link } from 'react-router-dom';

const UserImage = (props) => {
  return (
    <Link to={`/users/${props.userId}`}>
      <img className="people-container__person--image" src={props.image} alt={props.name}/>
    </Link>
  )
}
export default UserImage;
