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
        {this.state.users.map(user => {
          return (
            <User 
              {...user}
              key={user.id}
              handleFollowClick={this.clickFollowHandler}
              handleStarClick={this.clickStarHandler}
            />
          )
        })}
        {this.state.articles.map((article, i) => {
          return(
            <Article 
              key={article.id}
              {...article}
              user={this.state.users[i]}
              handleClapClick={this.clickClapHandler}
              handleBookmarkClick={this.clickBookmarkHandler}
              handleFollowClick={this.clickFollowHandler}
              handleStarClick={this.clickStarHandler}
            />
          )
        })}
      </div>
    )
  }
}