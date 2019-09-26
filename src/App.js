import React from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ArticleSummaryListItem from './components/Article/ArticlesList/ArticleSummaryListItem'
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
      <div className="ListContainer">
        {articles.map((article, i) => {
          return (
            <ArticleSummaryListItem
              className="ListItem"
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
      </div>
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
