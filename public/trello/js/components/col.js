'use strict'

// Import stylus files
import '../../css/components/col.styl';

// Import libs
import React, {Component, PropTypes} from 'react'

import TrelloColList from './colList';
import mockBoardCol from '../mockBoardCol';

export default class TrelloCol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockBoardCol
    };
  }
  render() {
    return (
      <div className='trello-col-container'>
        <TrelloColList data={this.state.data} />
      </div>
    );
  }
}
