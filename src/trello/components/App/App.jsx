import './style.styl'

import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

// Customized Components
import TrelloHeader from '../Header/Header'
import mockMyBoard from '../../mocks/mockMyBoard'

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
