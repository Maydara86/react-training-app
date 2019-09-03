import React from 'react';
import styles from './User.module.css';
import myImage from '../../assets/images/avatar.png';
import PropTypes from 'prop-types';

const User = ({ id, name, date, isFollowed, isStarred, handleFollowClick, handleStarClick, readingTime, useSimplifiedLayout }) => {
  
  const starColor = isStarred ? 'gold' : 'grey'
    return(
      <div className={useSimplifiedLayout ? styles.SmallUserContainer : styles.UserContainer} key={id}>
        <img className={useSimplifiedLayout ? styles.SmallUserImageItem : styles.UserImageItem} src={myImage} alt={name} />
        <div className={useSimplifiedLayout ? styles.SmallUserInfoItem : styles.UserInfoItem}>
          <div className={useSimplifiedLayout ? styles.SmallContentContainerRow1 : styles.ContentContainerRow1}>
            <div className={styles.NameItem}>{name}</div>
            {!useSimplifiedLayout && <button className={styles.FollowItem} onClick={() => handleFollowClick(id)}>
              {isFollowed ? 'Unfollow' : 'Follow'}
            </button>}
          </div>
          <div className={styles.ContentContainerRow2}>
            <div className={styles.DateItem}>{date}</div>
            <span>·</span>
            <div className={styles.ReadingTimeItem}>{readingTime} min read</div>
            <Icon className={styles.StarItem} color={starColor} handleStarClick={handleStarClick} id={id} />
          </div>
        </div>
      </div>
    )

}

export function Icon({color, handleStarClick, id}) {
  return (
    <svg
      style={{marginTop: 4, padding: 4, width: 15, height: 15, fill: color, cursor: 'pointer'}}
      viewBox="0 0 15 15"
      onClick={() => handleStarClick(id)}
    >
      <path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 00.26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 00-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 00-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 00-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 00.26-.19l1.2-3.52z" />
    </svg>
  );
}

User.propTypes = {
  handleFollowClick: PropTypes.func.isRequired,
  handleStarClick: PropTypes.func.isRequired
};

export default User;
