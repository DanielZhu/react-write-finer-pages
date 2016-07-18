'use strict'

// Import stylus files
import '../../css/components/board-brief.styl';

// Import libs
import React, {Component, PropTypes} from 'react'
import {Router, Route, Link, hashHistory} from 'react-router'
import classNames from 'classnames'

export default class TrelloBoardBrief extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  seeBoardCard() {
    // this.setState({clickCount: this.state.clickCount+1});
  }
  render() {
    let board = this.props.data;
    let content = (
      <Link to={'trello/b/create/new'} className='board-create-new brief-detail' style={{backgroundColor: '#e2e4e6'}}>
        <div className='board-cover'></div>
        <p className='board-create-new-tip'>Create new board...</p>
      </Link>
    );
    if (!this.props.addNew) {
      let starClass = classNames({
        'board-star-normal': true,
        'board-star-on': board.starred
      });
      let boardName = board.name.toLowerCase().replace(/\s+/g, '');
      content = (
        <Link to={'trello/b/' + board.shortLink + '/' + boardName} className='brief-detail' style={{backgroundColor: board.prefs.backgroundColor}}>
          <div className='board-cover'></div>
          <div className={starClass}></div>
          <p className='brief-detail-name'>{board.name}</p>
          <p className='brief-detail-sub-name'>{this.props.externTeam && board.organization && board.organization.displayName}</p>
        </Link>
      );
    }
    return (
      <li className='trello-board-brief'>
          {content}
      </li>
    );
  }
}
