import React from 'react'
import styles from './ArticleGrid.module.css'

export default function ArticleGrid(props) {
  return <div className={styles.container}>{props.children}</div>
}
