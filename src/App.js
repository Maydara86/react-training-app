import React from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ArticleSummaryContainer from './components/Article/ArticleSummaryContainer'
import ArticlesList from './components/ArticlesList/ArticlesList'
import ArticleGrid from './components/ArticleGrid/ArticleGrid'
import UserWithFollowButton from './components/User/UserWithFollowButton'
import clickStarHandler, { clickFollowHandler } from './store/actions/usersAction'
import clickBookmarkHandler, { clickClapHandler } from './store/actions/articlesAction'
import usersSelector from './selectors/users'
import articlesSelector from './selectors/articles'

function App(props) {
  /* eslint-disable no-shadow */
  const {
    users,
    articles,
    clickClapHandler,
    clickBookmarkHandler,
    clickStarHandler,
    clickFollowHandler,
  } = props
  /* eslint-disable no-shadow */

  return (
    <div>
      {/* {users.map(user => {
        return (
          <UserWithFollowButton
            user={user}
            key={user.id}
            handleFollowClick={clickFollowHandler}
            handleStarClick={clickStarHandler}
          />
        )
      })} */}
      <ArticleGrid>
        {articles.map((article, i) => {
          return (
            <ArticleSummaryContainer
              key={article.id}
              {...article}
              user={users[i]}
              handleClapClick={clickClapHandler}
              handleBookmarkClick={clickBookmarkHandler}
              handleFollowClick={clickFollowHandler}
              handleStarClick={clickStarHandler}
            />
          )
        })}
      </ArticleGrid>

      {/* <ArticlesList>
        {articles.map((article, i) => {
          return (
            <ArticleSummaryContainer
              key={article.id}
              {...article}
              user={users[i]}
              handleClapClick={clickClapHandler}
              handleBookmarkClick={clickBookmarkHandler}
              handleFollowClick={clickFollowHandler}
              handleStarClick={clickStarHandler}
              useArticlesListLayout
            />
          )
        })}
      </ArticlesList> */}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: articlesSelector(state),
    users: usersSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { clickStarHandler, clickBookmarkHandler, clickClapHandler, clickFollowHandler },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
