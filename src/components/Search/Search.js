import React from 'react'
// import styles from './Search.module.css'

export const Search = ({ search, changeSearchHandler }) => {
  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="       Search . . ."
            onChange={changeSearchHandler}
            value={search}
            required
          />
        </div>
      </div>
    </div>
  )
}
