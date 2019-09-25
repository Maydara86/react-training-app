import React from 'react'
import myImage from '../../assets/images/article.jpeg'
import User from '../User/User'
import { ClapFilled, ClapUnfilled, BookmarkFilled, BookmarkUnfilled } from '../Svg/Svg'
import styles from './ArticleSummaryListItem.module.css'

export default function ArticleSummaryListItem({
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
  useArticlesListLayout,
}) {
  const ListTheme = {
    '--article-width': '700px',
    '--article-height': '640px',
    '--article-title-color': 'black',
    '--article-title-fontweight': 'bold',
    '--article-title-size': '30px',
    '--article-border': 'solid',
  }

  // eslint-disable-next-line array-callback-return
  Object.keys(ListTheme).map(key => {
    const value = ListTheme[key]
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
      changeSvgColor={useArticlesListLayout}
    />
  )

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
