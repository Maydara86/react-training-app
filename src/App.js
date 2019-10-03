import React from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ArticleSummaryGridCard from './components/Article/ArticleGrid/ArticleSummaryGridCard'
import Search from './components/Search/Search'
import clickStarHandler, { clickFollowHandler } from './store/actions/usersAction'
import clickBookmarkHandler, { clickClapHandler } from './store/actions/articlesAction'
import changeSearchHandler from './store/actions/searchAction'
import usersSelector from './selectors/users'
import articlesSelector from './selectors/articles'
import getSearchFromState from './selectors/search'

function App(props) {
  /* eslint-disable no-shadow */
  const {
    users,
    articles,
    searchTerm,
    clickClapHandler,
    clickBookmarkHandler,
    clickStarHandler,
    clickFollowHandler,
    changeSearchHandler,
  } = props
  /* eslint-disable no-shadow */

  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            strict
            render={() => {
              return (
                <Link to="/article-grid">
                  <h1>Go to the Grid Page</h1>
                </Link>
              )
            }}
          />
          <Route path="/article-grid" exact component={ArticleSummaryGridCard}>
            <Search searchTerm={searchTerm} changeSearchHandler={changeSearchHandler} />
            <div className="articleSummaryGridContainer">
              {articles.map((article, i) => {
                return (
                  <ArticleSummaryGridCard
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
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    articles: articlesSelector(state),
    users: usersSelector(state),
    searchTerm: getSearchFromState(state),
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      clickStarHandler,
      clickBookmarkHandler,
      clickClapHandler,
      clickFollowHandler,
      changeSearchHandler,
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
