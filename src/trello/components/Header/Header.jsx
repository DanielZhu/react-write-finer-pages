'use strict'

// Import stylus files
import './style.styl'

// Import libs
import React, {Component, PropTypes} from 'react'
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

export default class TrelloHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <div className='trello-header'>
        <div className='trello-left-toolbar'>
          <div className='trello-btn trello-board'>
            <img src='src/assets/icons/board.png' className='suffix-icon'></img>
            <span className='label'>Boards</span>
          </div>
          <div className='trello-search-bar'>
             <input type="text" />
          </div>
        </div>
        <Link to='#/trello' className='trello-logo'>Trello</Link>
        <div className='trello-right-toolbar'>
          <div className='trello-icon-btn trello-btn-new'>
            <img src='src/assets/icons/plus.png'></img>
          </div>
          <div className='trello-btn trello-btn-account'>
            <img src={'https://trello-avatars.s3.amazonaws.com/'+this.props.userInfo.avatar+'/30.png'} className='avatar'></img>
            {this.props.userInfo.fullName}
          </div>
          <div className='trello-icon-btn trello-btn-info'>
            <img src='src/assets/icons/info.png'></img>
          </div>
          <div className='trello-icon-btn trello-btn-notify'>
            <img src='src/assets/icons/ring.png'></img>
          </div>
        </div>
      </div>
    );
  }
}
