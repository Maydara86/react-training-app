import React from 'react'
import styles from './ArticleMagazin.module.css'

export default function ArticleMagazin(props) {
  return <div className={styles.magazinContainer}>{props.children}</div>
}
