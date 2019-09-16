import React from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Article from './components/Article/Article'
// import ArticleGrid from './components/ArticleGrid/ArticleGrid'
// import User from './components/User/User'
import ArticleMagazin from './components/ArticleMagazin/ArticleMagazin'
import clickStarHandler from './store/actions/usersAction'
import clickBookmarkHandler, { clickClapHandler } from './store/actions/articlesAction'
import usersSelector from './selectors/users'
import articlesSelector from './selectors/articles'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.clickFollowHandler = this.clickFollowHandler.bind(this)
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

  render() {
    const { users, articles, clickClapHandler, clickBookmarkHandler, clickStarHandler } = this.props

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
                user={users[i]}
                handleClapClick={clickClapHandler}
                handleBookmarkClick={clickBookmarkHandler}
                handleFollowClick={this.clickFollowHandler}
                handleStarClick={clickStarHandler}
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
  return bindActionCreators({ clickStarHandler, clickBookmarkHandler, clickClapHandler }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
