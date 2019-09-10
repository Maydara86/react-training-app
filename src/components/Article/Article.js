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
    '--article-height': '640px',
    '--article-title-color': 'black',
    '--article-title-fontweight': 'bold',
    '--article-title-size': '30px',
    '--article-border': 'solid',
  }

  const gridTheme = {
    '--article-width': '400px',
    '--article-height': '440px',
    '--article-title-color': 'rgba(0, 0, 0, 0.84)',
    '--article-title-fontweight': '500',
    '--article-border': 'none',
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
    <ClapUnfilled
      className={styles.clapsIconItem}
      handleClapClick={handleClapClick}
      id={id}
      changeSvgColor={useArticleMagazinLayout}
    />
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
        <span className={styles.readMore}>Read more...</span>
        <div className={styles.appreciation}>
          <div className={styles.claps}>
            {didClap ? clapFilled : clapUnfilled}
            <span className={styles.clapsNumber}>{claps}</span>
          </div>
          <div className={styles.responses}>
            <div className={styles.responsesNumber}>{responses} responses</div>
            {bookmark ? bookmarkFilled : bookmarkUnfilled}
          </div>
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
