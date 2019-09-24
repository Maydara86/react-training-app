import React from 'react'
import PropTypes from 'prop-types'
import { Star } from '../Svg/Svg'
import classes from './User.module.css'
import myImage from '../../assets/images/avatar.png'

const User = ({
  id,
  name,
  date,
  isStarred,
  handleStarClick,
  readingTime,
  children,
  styles = classes,
}) => {
  const starColor = isStarred ? 'gold' : 'grey'
  return (
    <div className={styles.userContainer} key={id}>
      <img className={styles.userImageItem} src={myImage} alt={name} />
      <div className={styles.userInfoItem}>
        <div className={styles.contentContainerRow1}>
          <div className={styles.nameItem}>{name}</div>
          {children}
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
