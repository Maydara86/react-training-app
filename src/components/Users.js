import React from 'react'
import User from './User'

const users = (props) => {
  return (
      <div>
        {props.users.map(u => {
          return (
            <User 
              key={u.id}
              name={u.name}
              date={u.date}
              readingTime={u.readingTime}
              isStared={u.isStared}
              isFollowed={u.isFollowed}
              image={u.image}
              handelClick={props.handelClick}
            />
          )
        })}
      </div>
  )
}

export default users