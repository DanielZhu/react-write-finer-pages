'use strict'

// Import stylus files
import './style.styl'

// Import libs
import React, {Component, PropTypes} from 'react'

import TrelloBoardBriefList from '../BoardBriefList/BoardBriefList'
import mockMyBoard from '../../mocks/mockMyBoard'

export default class TrelloBoardBriefBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockMyBoard
    };
  }
  render() {
    return (
      <div className='content'>
        <div className='trello-board-brief-box'>
          <TrelloBoardBriefList data={this.state.data} />
        </div>
      </div>
    );
  }
}
