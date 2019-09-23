import React from 'react'
import PropTypes from 'prop-types'
import { Star } from '../Svg/Svg'
import styles from './User.module.css'
import myImage from '../../assets/images/avatar.png'

const User = ({ id, name, date, isStarred, handleStarClick, readingTime }) => {
  const starColor = isStarred ? 'gold' : 'grey'
  return (
    <div className={styles.smallUserContainer} key={id}>
      <img className={styles.smallUserImageItem} src={myImage} alt={name} />
      <div className={styles.smallUserInfoItem}>
        <div className={styles.smallContentContainerRow1}>
          <div className={styles.nameItem}>{name}</div>
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
  handleStarClick: PropTypes.func.isRequired,
}

export default User
