import React from 'react';
import classes from './User.module.css';
import myImage from '../../assets/images/avatar.png';
import PropTypes from 'prop-types';

const User = ({ id, name, date, isFollowed, isStared, handleFollowClick, handleStarClick, readingTime }) => {
  return (
    <div className={classes.User} key={id}>
      <div className={classes.name}>name: {name}</div>
      <button onClick={() => handleFollowClick(id)}>{isFollowed === 'active' ? 'Unfollow' : 'Follow'}</button>
      <input
        className={classes.hvrIconPop}
        checked={isStared === 'active' ? true : false}
        onChange={() => handleStarClick(id)}
        type="checkbox"
      />
      <div>date: {date}</div>
      <div>reading time: {readingTime}</div>
      <img src={myImage} alt={name} />
    </div>
  );
};

User.propTypes = {
  handleFollowClick: PropTypes.func.isRequired,
  handleStarClick: PropTypes.func.isRequired
};

export default User;
