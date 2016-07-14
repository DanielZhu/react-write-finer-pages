'use strict'

// Import stylus files
import '../../css/components/header.styl';

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
          <div className='trello-btn trello-board'>Boards</div>
          <div className='trello-search-bar'>
             <input type="text" />
          </div>
        </div>
        <Link to='/' className='trello-logo'>Trello</Link>
        <div className='trello-right-toolbar'>
          <div className='trello-btn trello-btn-new'>+</div>
          <div className='trello-btn trello-btn-account'>Mengdan Zhu</div>
          <div className='trello-btn trello-btn-info'>i</div>
          <div className='trello-btn trello-btn-notify'>Ring</div>
        </div>
      </div>
    );
  }
}
