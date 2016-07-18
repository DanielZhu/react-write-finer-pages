import './public/css/app.styl';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

// Customized Components
import TrelloAppSkeleton from './public/trello'
import TrelloCol from './public/trello/js/components/col'
import InstagramApp from './public/instagram/js/index'
import Spin from './public/js/spin'

import TrelloBoardBriefBox from './public/trello/js/components/boardBriefBox'

class App extends React.Component {
  render() {
    return (
      <div className='app-wrapper'>
        {this.props.children || "Something wrong"}
      </div>
    );
  }
}

class AppHome extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      text: 'Loading'
    };
  }
  redirectApp() {
    setTimeout(() => {
      window.location.href = '#/trello';
    }, 1000);
  }
  render() {
    this.redirectApp();
    return (
      <div className='app-container'>
        <Spin text={this.state.text}></Spin>
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={AppHome} />
      <Route path='trello' component={TrelloAppSkeleton} >
        <IndexRoute component={TrelloBoardBriefBox} />
        <Route path='b/:shortlink/:name' component={TrelloCol} />
      </Route>
    </Route>
  </Router>
), document.getElementById('react-clone-app'));



