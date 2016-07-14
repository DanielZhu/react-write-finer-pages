'use strict'

// Import stylus files
import '../../css/components/board-brief.styl';

// Import libs
import React, {Component, PropTypes} from 'react'
import {Router, Route, Link, hashHistory} from 'react-router'

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
    return (
      <li className='trello-board-brief'>
        <Link to="b/board.shortLink" className='brief-detail' style={{backgroundColor: board.prefs.backgroundColor}}>
          <p className='brief-detail-name'>{board.name}</p>
          <p className='brief-detail-sub-name'>{this.props.externTeam && board.organization && board.organization.displayName}</p>
        </Link>
      </li>
    );
  }
}
