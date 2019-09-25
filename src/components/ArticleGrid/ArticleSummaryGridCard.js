import React from 'react'
import User from '../User/User'
import myImage from '../../assets/images/article.jpeg'
import { ClapFilled, ClapUnfilled, BookmarkFilled, BookmarkUnfilled } from '../Svg/Svg'
import styles from './ArticleSummaryGridCard.module.css'

export default function ArticleSummaryGridCard({
  id,
  articleName,
  claps,
  bookmark,
  user,
  didClap,
  handleClapClick,
  handleBookmarkClick,
  handleStarClick,
  handleFollowClick,
}) {
  const gridTheme = {
    '--article-width': '400px',
    '--article-height': '440px',
    '--article-title-color': 'rgba(0, 0, 0, 0.84)',
    '--article-title-fontweight': '500',
    '--article-border': 'none',
  }

  // eslint-disable-next-line array-callback-return
  Object.keys(gridTheme).map(key => {
    const value = gridTheme[key]
    document.documentElement.style.setProperty(key, value)
  })

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
