import React from 'react'
import styles from './Article.module.css'
import myImage from '../../assets/images/article.jpeg'
import User from '../User/User'
import { ClapFilled, ClapUnfilled, BookmarkFilled, BookmarkUnfilled } from '../Svg/Svg'

export default function Article({
  id,
  articleName,
  claps,
  bookmark,
  handleClapClick,
  handleBookmarkClick,
  handleStarClick,
  handleFollowClick,
  didClap,
  user,
}) {
  const bookmarkFilled = (
    <BookmarkFilled
      className={styles.bookmarkIconItem}
      key={id}
      bookmarkClick={handleBookmarkClick}
      id={id}
    />
  )
  const bookmarkUnfilled = (
    <BookmarkUnfilled
      className={styles.bookmarkIconItem}
      key={id}
      bookmarkClick={handleBookmarkClick}
      id={id}
    />
  )
  const clapFilled = (
    <ClapFilled className={styles.clapsIconItem} handleClapClick={handleClapClick} id={id} />
  )
  const clapUnfilled = (
    <ClapUnfilled className={styles.clapsIconItem} handleClapClick={handleClapClick} id={id} />
  )

  return (
    <div key={id} className={styles.articleContainer}>
      <img src={myImage} alt={articleName} className={styles.articleImageItem} />
      <h3 className={styles.articleTitleItem}>{articleName}</h3>
      <div className={styles.authorAndLikesItem}>
        <div className={styles.authorAndLikesContainer}>
          <User
            className={styles.authorItem}
            {...user}
            useSimplifiedLayout
            handleFollowClick={handleFollowClick}
            handleStarClick={handleStarClick}
          />
          <div className={`${styles.likesItem} ${styles.likesContainer}`}>
            {didClap ? clapFilled : clapUnfilled}
            <div className={styles.clapsNumberItem}>{claps}</div>
            <span className={styles.separatorItem} />
            {bookmark ? bookmarkFilled : bookmarkUnfilled}
          </div>
        </div>
      </div>
    </div>
  )
}
