import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Redirect, IndexRoute, Link, hashHistory} from 'react-router'

// Common Components
import Spin from './src/components/Spin/Spin'
import NotFound from './src/components/NotFound/NotFound'
import App from './src/components/App/App'

// Trello Components
import TrelloAppSkeleton from './src/trello/components/App/App'
import TrelloCol from './src/trello/components/Col/Col'
import TrelloBoardBriefBox from './src/trello/components/BoardBriefBox/BoardBriefBox'

// Instagram Components
import InstagramAppSkeleton from './src/instagram/components/App/App'
// import InstagramStream from './src/instagram/components/Stream/Stream'

// redirectApp() {
  // setTimeout(() => {
  //   window.location.href = '#/trello';
  // }, 1500);
// }

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Spin} />
      <Route path='trello' component={TrelloAppSkeleton} >
        <IndexRoute component={TrelloBoardBriefBox} />
        <Route path='b/:shortlink/:name' component={TrelloCol} />
      </Route>
      <Route path='instagram' component={InstagramAppSkeleton} >
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('react-clone-app'));



