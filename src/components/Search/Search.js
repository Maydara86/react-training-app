import React from 'react'
import styles from './Search.module.css'

const Search = ({ searchTerm, changeSearchHandler }) => {
  return (
    <div className={styles.flexbox}>
      <div className={styles.search}>
        <div>
          <input
            type="text"
            placeholder="       Search . . ."
            onChange={changeSearchHandler}
            value={searchTerm}
            required
          />
        </div>
      </div>
    </div>
  )
}

export default Search
