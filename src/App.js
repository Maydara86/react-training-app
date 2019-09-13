import React from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Article from './components/Article/Article'
// import ArticleGrid from './components/ArticleGrid/ArticleGrid'
// import User from './components/User/User'
import ArticleMagazin from './components/ArticleMagazin/ArticleMagazin'
import updateUsers from './store/actions/usersAction'
import updateArticles from './store/actions/articlesAction'
import usersSelector from './selectors/users'
import articlesSelector from './selectors/articles'

class App extends React.Component {
  constructor(props) {
    super(props)
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
    const updatedUsers = this.props.users.map(user => {
      if (user.id === id) {
        user.isStarred = !user.isStarred
      }
      return user
    })
    this.props.updateUsers(updatedUsers)
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
    const { users, articles } = this.props

    return (
      <div>
        {/* {users.map(user => {
          return (
            <User
              {...user}
              key={user.id}
              handleFollowClick={this.clickFollowHandler}
              handleStarClick={this.clickStarHandler}
            />
          )
        })} */}
        {/* <ArticleGrid>
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
              />
            )
          })}
        </ArticleGrid> */}
        <ArticleMagazin>
          {articles.map((article, i) => {
            return (
              <Article
                key={article.id}
                {...article}
                user={this.props.users[i]}
                handleClapClick={this.clickClapHandler}
                handleBookmarkClick={this.clickBookmarkHandler}
                handleFollowClick={this.clickFollowHandler}
                handleStarClick={this.clickStarHandler}
                useArticleMagazinLayout
              />
            )
          })}
        </ArticleMagazin>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: articlesSelector(state),
    users: usersSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateUsers }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
