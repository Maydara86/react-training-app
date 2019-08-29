import React from 'react'
import './App.css'
import data from './data/users-data.json'
import articlesData from './data/articles-data.json'
import Article from './components/Article/Article'
import User from './components/User/User'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {users: data, articles: articlesData}
    this.clickFollowHandler = this.clickFollowHandler.bind(this)
    this.clickStarHandler = this.clickStarHandler.bind(this)
    this.clickClapHandler = this.clickClapHandler.bind(this)
    this.clickBookmarkHandler = this.clickBookmarkHandler.bind(this)
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
              user.isStarred === 'active' ? user.isStarred = 'idle' : user.isStarred = 'active'
            }
            return user
        })
        return {
            users: updatedUsers
        }
    })
  }

  clickClapHandler(id) {
    this.setState(prevState => {
      const updatedArticles = prevState.articles.map(a => {
        if(a.id === id) {
          a.claps++
          a.didClap = true
        }
        return a
      })
      return {articles: updatedArticles}
    })
  }

  clickBookmarkHandler(id) {
    this.setState(prevState => {
      const updatedArticles = prevState.articles.map(a => {
        if(a.id === id) {
        a.bookmark = !a.bookmark
      }
        return a
      })
      return {articles: updatedArticles}
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
              isStarred={u.isStarred}
              isFollowed={u.isFollowed}
              image={u.image}
              handleFollowClick={this.clickFollowHandler}
              handleStarClick={this.clickStarHandler}
            />
          )
        })}
        {this.state.articles.map(a => {
          return(
            <Article 
              key={a.id}
              id={a.id}
              name={a.articleName}
              claps={a.claps}
              didClap={a.didClap}
              bookmark={a.bookmark}
              handleClapClick={this.clickClapHandler}
              handleBookmarkClick={this.clickBookmarkHandler}
            />
          )
        })}
      </div>
    )
  }
}