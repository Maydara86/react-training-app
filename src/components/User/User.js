import React from 'react';
import classes from './User.module.css';
import myImage from '../../assets/images/avatar.png';
import PropTypes from 'prop-types';

const User = ({ id, name, date, isFollowed, isStared, handleFollowClick, handleStarClick, readingTime }) => {
  
    return(
      <div className={classes.container} key={id}>
        <img className={classes.imageContainer} src={myImage} alt={name} />
        <div className={classes.contentContainer}>
          <div className={classes.name}>name: {name}</div>
          <button onClick={() => handleFollowClick(id)}>
            {isFollowed === 'active' ? 'Unfollow' : 'Follow'}
          </button>
          <input 
            className={classes.hvrIconPop}
            checked={isStared === 'active' ? true : false} 
            onChange={() => handleStarClick(id)}
            type='checkbox' 
          />
          <div className={classes.date}>date: {date}</div>
          <div className={classes.time}>reading time: {readingTime}</div>
        </div>
      </div>
    )

}

User.propTypes = {
  handleFollowClick: PropTypes.func.isRequired,
  handleStarClick: PropTypes.func.isRequired
};

export default User;
