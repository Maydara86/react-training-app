import React from 'react'
import classes from './User.module.css'
import myImage from '../../assets/images/avatar.png'
import PropTypes from 'prop-types'


const User = props => {
  
    return(
      <div className={classes.User} key={props.id}>
        <div className={classes.name}>name: {props.name}</div>
        <button onClick={() => props.handleFollowClick(props.id)}>
          {props.isFollowed === 'active' ? 'Unfollow' : 'Follow'}
        </button>
        <input 
          className={classes.hvrIconPop}
          checked={props.isStared === 'active' ? true : false} 
          onChange={() => props.handleStarClick(props.id)}
          type='checkbox' 
        />
        <div>date: {props.date}</div>
        <div>reading time: {props.readingTime}</div>
        <img src={myImage} alt={props.name} />
      </div>
    )

}

User.propTypes = {
  handleFollowClick: PropTypes.func.isRequired,
  handleStarClick: PropTypes.func.isRequired,
}

export default User