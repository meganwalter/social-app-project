import React from 'react'
import UserImage from './home_user_image'

const HomeUserView = (props) => {
  return(
    <div className="people-container__person">
      <UserImage userId={props.userId} image={props.image}/>
      <p>{props.name}</p>
    </div>
  )
}

export default HomeUserView;
