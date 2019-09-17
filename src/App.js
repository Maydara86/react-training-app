import React from 'react'
import './App.css'
import usersData from './data/users-data.json'
import articlesData from './data/articles-data.json'
import Article from './components/Article/Article'
import ArticlesList from './components/ArticlesList/ArticlesList'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { users: usersData, articles: articlesData }
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
        users: updatedUsers,
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
        users: updatedUsers,
      }
    })
  }

  clickClapHandler(id) {
    this.setState(prevState => {
      const updatedArticles = prevState.articles.map(a => {
        if (a.id === id) {
          a.claps += 1
          a.didClap = true
        }
        return a
      })
      return { articles: updatedArticles }
    })
  }

  clickBookmarkHandler(id) {
    this.setState(prevState => {
      const updatedArticles = prevState.articles.map(a => {
        if (a.id === id) {
          a.bookmark = !a.bookmark
        }
        return a
      })
      return { articles: updatedArticles }
    })
  }

  render() {
    const { users, articles } = this.state

    return (
      <div>
        <ArticlesList>
          {articles.map((article, i) => {
            return (
              <Article
                key={article.id}
                {...article}
                user={users[i]}
                handleClapClick={this.clickClapHandler}
                handleBookmarkClick={this.clickBookmarkHandler}
                handleFollowClick={this.clickFollowHandler}
                handleStarClick={this.clickStarHandler}
                useArticlesListLayout
              />
            )
          })}
        </ArticlesList>
      </div>
    )
  }
}
