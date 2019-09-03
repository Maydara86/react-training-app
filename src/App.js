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
              user.isFollowed = !user.isFollowed
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
              user.isStarred = !user.isStarred
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
        {this.state.users.map(user => {
          return (
            <User 
              key={user.id}
              {...user}
              handleFollowClick={this.clickFollowHandler}
              handleStarClick={this.clickStarHandler}
            />
          )
        })}
      </div>
    )
  }
}