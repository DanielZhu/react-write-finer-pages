import '../css/trello.styl';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

// Customized Components
import TrelloHeader from './components/header';
import TrelloBoardBriefBox from './components/boardBriefBox';
import TrelloCol from './components/col';
import mockMyBoard from './mockMyBoard';

class App extends React.Component {
  render() {
    return (
      <div className='trello-wrapper'>
        <TrelloHeader userInfo={{avatar: mockMyBoard.avatarHash, fullName: mockMyBoard.fullName}}/>
        {this.props.children || "Something wrong"}
      </div>
    );
  }
}

class TrelloHome extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      text: 'Trello By Xiaodan'
    };
  }
  render() {
    return (
      <div className='trello-container'>
        <TrelloBoardBriefBox />
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TrelloHome} />
      <Route path='b' component={TrelloCol} />
    </Route>
  </Router>
), document.getElementById('trello-app'));



