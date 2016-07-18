import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Redirect, IndexRoute, Link, hashHistory} from 'react-router'

// Customized Components
import TrelloAppSkeleton from './src/trello/components/App/App'
import TrelloCol from './src/trello/components/Col/Col'
import TrelloBoardBriefBox from './src/trello/components/BoardBriefBox/BoardBriefBox'

import Spin from './src/components/Spin/Spin'
import App from './src/components/App/App'
// import InstagramApp from './src/instagram/index'


// redirectApp() {
  setTimeout(() => {
    window.location.href = '#/trello';
  }, 1000);
// }
render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Spin} />
      <Route path='trello' component={TrelloAppSkeleton} >
        <IndexRoute component={TrelloBoardBriefBox} />
        <Route path='b/:shortlink/:name' component={TrelloCol} />
      </Route>
    </Route>
  </Router>
), document.getElementById('react-clone-app'));



