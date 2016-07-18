import './css/trello.styl'

import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

// Customized Components
import TrelloHeader from './js/components/header'
import mockMyBoard from './js/mockMyBoard'

export default class AppSkeleton extends React.Component {
  render() {
    return (
      <div className='trello-skeleton'>
        <TrelloHeader userInfo={{avatar: mockMyBoard.avatarHash, fullName: mockMyBoard.fullName}}/>
        {this.props.children || "Something wrong"}
      </div>
    );
  }
}
