import React from 'react'
import classes from './User.module.css'

const User = props => {
  return(
    <div className={classes.User}>
      {/* <img src="{props.image}" alt={props.name} /> */}
      <div className={classes.name}>name: {props.name}</div>
      <button onClick={() => props.handelFollowClick(props.id)}>
        {props.isFollowed === 'active' ? 'Unfollow' : 'Follow'}
      </button>
      <input 
        className={classes.hvrIconPop}
        checked={props.isStared === 'active' ? true : false} 
        onChange={() => props.handelStarClick(props.id)}
        type='checkbox' 
      />
      <div>date: {props.date}</div>
      <div>reading time: {props.readingTime}</div>
      <div>image here</div>
    </div>
  )
}

export default User