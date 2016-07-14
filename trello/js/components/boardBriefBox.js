'use strict'

// Import stylus files
import '../../css/components/board-brief-box.styl';

// Import libs
import React, {Component, PropTypes} from 'react'

import TrelloBoardBriefList from './boardBriefList';
import mockMyBoard from '../mockMyBoard';

export default class TrelloBoardBriefBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockMyBoard
    };
  //   this.state = {
  //     data: [
  //       {
  //         listId: 10001,
  //         boardListTitle: 'Starred Boards',
  //         data: [
  //           {
  //             id: 1,
  //             detailName: 'Issue Collections',
  //             detailSubName: 'Staydan.com',
  //             background: '#00AECC'
  //           }, {
  //             id: 2,
  //             detailName: 'Learning',
  //             detailSubName: 'Staydan.com',
  //             background: '#bbb333'
  //           }, {
  //             id: 3,
  //             detailName: 'Holidays',
  //             detailSubName: 'Staydan.com',
  //             background: '#CD5A91'
  //           }
  //         ]
  //       },
  //       {
  //         listId: 10002,
  //         boardListTitle: 'My Boards',
  //         data: [
  //           {
  //             id: 4,
  //             detailName: 'Dairy',
  //             detailSubName: '',
  //             background: '#00AECC'
  //           }, {
  //             id: 5,
  //             detailName: 'About',
  //             detailSubName: '',
  //             background: '#B04632'
  //           }, {
  //             id: 6,
  //             detailName: 'Help',
  //             detailSubName: '',
  //             background: '#B04632'
  //           }
  //         ]
  //       },
  //       {
  //         listId: 10003,
  //         boardListTitle: 'Team board - Staydan.com',
  //         data: [
  //           {
  //             id: 7,
  //             detailName: 'Aboard',
  //             detailSubName: '',
  //             background: '#00AECC'
  //           }, {
  //             id: 8,
  //             detailName: 'Bull Terrier',
  //             detailSubName: '',
  //             background: '#b9ad01'
  //           }, {
  //             id: 9,
  //             detailName: 'CC',
  //             detailSubName: '',
  //             background: '#d9ad9f'
  //           }, {
  //             id: 10,
  //             detailName: 'CommentForest',
  //             detailSubName: '',
  //             background: '#CD5A91'
  //           }, {
  //             id: 11,
  //             detailName: 'Dogs & Cats',
  //             detailSubName: '',
  //             background: '#00AECC'
  //           }, {
  //             id: 12,
  //             detailName: 'Prepare',
  //             detailSubName: '',
  //             background: '#B04632'
  //           }, {
  //             id: 13,
  //             detailName: 'Swift',
  //             detailSubName: '',
  //             background: '#B04632'
  //           }
  //         ]
  //       }
  //     ]
  //   };
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
