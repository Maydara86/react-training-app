import React from 'react'
import styles from './Search.module.css'

const Search = () => {
  return (
    <div className={styles.flexbox}>
      <div className={styles.search}>
        <div>
          <input type="text" placeholder="       Search . . ." required />
        </div>
      </div>
    </div>
  )
}

export default Search
