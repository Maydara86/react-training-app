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
  responses,
  content,
  user,
  didClap,
  handleClapClick,
  handleBookmarkClick,
  handleStarClick,
  handleFollowClick,
  useArticleMagazinLayout,
}) {
  const magazinTheme = {
    '--article-width': '700px',
    '--article-height': '740px',
  }

  const gridTheme = {
    '--article-width': '400px',
    '--article-height': '440px',
  }

  const theme = useArticleMagazinLayout ? magazinTheme : gridTheme
  Object.keys(theme).map(key => {
    const value = theme[key]
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

  if (useArticleMagazinLayout) {
    return (
      <div key={id} className={styles.articleContainer}>
        <User
          className={styles.authorItem}
          {...user}
          useSimplifiedLayout
          handleFollowClick={handleFollowClick}
          handleStarClick={handleStarClick}
        />
        <img src={myImage} alt={articleName} className={styles.articleImageItem} />
        <h3 className={styles.articleTitleItem}>{articleName}</h3>
        <p>{content}</p>
        <p>Read more...</p>
        <p>responses: {responses}</p>
        <div>
          {didClap ? clapFilled : clapUnfilled}
          {bookmark ? bookmarkFilled : bookmarkUnfilled}
        </div>
      </div>
    )
  }
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
