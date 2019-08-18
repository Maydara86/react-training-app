import React from 'react'
import './App.css'
import data from './data/users-data.json'
import User from './components/User/User'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {users: data}
    this.clickFollowHandler = this.clickFollowHandler.bind(this)
    this.clickStarHandler = this.clickStarHandler.bind(this)
  }

  clickFollowHandler(id) {
    this.setState(prevState => {
        const updatedUsers = prevState.users.map(user => {
            if (user.id === id) {
              user.isFollowed === 'active' ? user.isFollowed = 'idle' : user.isFollowed = 'active'
            }
            return user
        })
        return {
            users: updatedUsers
        }
    })
  }

  clickStarHandler(id) {
    this.setState(prevState => {
        const updatedUsers = prevState.users.map(user => {
            if (user.id === id) {
              user.isStared === 'active' ? user.isStared = 'idle' : user.isStared = 'active'
            }
            return user
        })
        return {
            users: updatedUsers
        }
    })
  }

  render() {
    return (
      <div>
        {this.state.users.map(u => {
          return (
            <User 
              key={u.id}
              id={u.id}
              name={u.name}
              date={u.date}
              readingTime={u.readingTime}
              isStared={u.isStared}
              isFollowed={u.isFollowed}
              image={u.image}
              handleFollowClick={this.clickFollowHandler}
              handleStarClick={this.clickStarHandler}
            />
          )
        })}
      </div>
    )
  }
}