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
import searchSelector from './selectors/search'

function App(props) {
  /* eslint-disable no-shadow */
  const {
    users,
    search,
    clickClapHandler,
    clickBookmarkHandler,
    clickStarHandler,
    clickFollowHandler,
    changeSearchHandler,
  } = props

  let { articles } = props
  /* eslint-disable no-shadow */

  const searchQuery = search.trim().toLowerCase()
  if (searchQuery.length > 0) {
    articles = articles.filter(article => {
      return article.articleName.toLowerCase().match(searchQuery)
    })
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/article-grid" exact component={ArticleSummaryGridCard}>
            <Search search={search} changeSearchHandler={changeSearchHandler} />
            <div className="articleSummaryGridContainer">
              {articles.map((article, i) => {
                return (
                  <ArticleSummaryGridCard
                    className="ListItem"
                    key={article.id}
                    {...article}
                    user={users[i]}
                    search={search}
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
        <Link to="/article-grid">
          <h1>Go to the Grid Page</h1>
        </Link>
      </div>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    articles: articlesSelector(state),
    users: usersSelector(state),
    search: searchSelector(state),
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
