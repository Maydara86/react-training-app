import React from 'react'
import PropTypes from 'prop-types'
import { Star } from '../Svg/Svg'
import styles from './User.module.css'
import myImage from '../../assets/images/avatar.png'

const User = ({
  id,
  name,
  date,
  isFollowed,
  isStarred,
  handleFollowClick,
  handleStarClick,
  readingTime,
  useSimplifiedLayout,
}) => {
  const starColor = isStarred ? 'gold' : 'grey'
  return (
    <div
      className={useSimplifiedLayout ? styles.smallUserContainer : styles.userContainer}
      key={id}
    >
      <img
        className={useSimplifiedLayout ? styles.smallUserImageItem : styles.userImageItem}
        src={myImage}
        alt={name}
      />
      <div className={useSimplifiedLayout ? styles.smallUserInfoItem : styles.userInfoItem}>
        <div
          className={
            useSimplifiedLayout ? styles.smallContentContainerRow1 : styles.contentContainerRow1
          }
        >
          <div className={styles.nameItem}>{name}</div>
          {!useSimplifiedLayout && (
            <button className={styles.followItem} onClick={() => handleFollowClick(id)}>
              {isFollowed ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>
        <div className={styles.contentContainerRow2}>
          <div className={styles.dateItem}>{date}</div>
          <span>·</span>
          <div className={styles.readingTimeItem}>{readingTime} min read</div>
          <Star
            className={styles.starItem}
            color={starColor}
            handleStarClick={handleStarClick}
            id={id}
          />
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  handleFollowClick: PropTypes.func.isRequired,
  handleStarClick: PropTypes.func.isRequired,
}

export default User
