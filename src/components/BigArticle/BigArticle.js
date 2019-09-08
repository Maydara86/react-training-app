import React from 'react'
import styles from './BigArticle.module.css'

export default function BigArticle(props) {
  return <div className={styles.container}>{props.children}</div>
}
