import React from 'react'
import styles from './ArticlesList.module.css'

export default function ArticlesList(props) {
  return <div className={styles.magazinContainer}>{props.children}</div>
}
