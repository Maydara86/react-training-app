import React from 'react'
import './App.css'
import { connect } from 'react-redux'
// import usersData from './data/users-data.json'
// import articlesData from './data/articles-data.json'
import Article from './components/Article/Article'
// import ArticleGrid from './components/ArticleGrid/ArticleGrid'
// import User from './components/User/User'
import ArticleMagazin from './components/ArticleMagazin/ArticleMagazin'
import updateUsers from './store/actions/usersAction'
import updateArticles from './store/actions/articlesAction'

class App extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { users: usersData, articles: articlesData }
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
        <h2>Redux Tutorial</h2>
        Person Name: {users[0].name}
        <button onClick={this.props.personClickHandler}>Update Person</button>
        <br />
        Game Name: {articles[0].id}
        <button onClick={this.props.gameClickHandler}>Update Game</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    personClickHandler: () => dispatch(updateUsers),
    gameClickHandler: () => dispatch(updateArticles),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
