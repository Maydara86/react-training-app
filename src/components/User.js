import React from 'react'

const user = props => {
  return(
    <div>
      {/* <img src="{props.image}" alt={props.name} /> */}
      <div>name: {props.name}</div>
      <button onClick={() => props.handelFollowClick(props.id)}>
        {props.isFollowed ? 'Unfollow' : 'Follow'}
      </button>
      <input 
        checked={props.isStared} 
        onChange={() => props.handelStarClick(props.id)}
        type='checkbox' 
      />
      <div>date: {props.date}</div>
      <div>reading time: {props.readingTime}</div>
      <div>image here</div>
      <hr />
    </div>
  )
}

export default user