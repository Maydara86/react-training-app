import React from 'react'
import User from './User'
import styles from './UserWithFollowButton.module.css'

const UserWithFollowButton = ({ user, handleFollowClick, handleStarClick }) => {
  return (
    <User styles={styles} {...user} handleStarClick={handleStarClick}>
      <button className={styles.followItem} onClick={() => handleFollowClick(user.id)}>
        {user.isFollowed ? 'Unfollow' : 'Follow'}
      </button>
    </User>
  )
}

export default UserWithFollowButton
