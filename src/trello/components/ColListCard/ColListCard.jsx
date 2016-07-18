'use strict'

// Import stylus files
import './style.styl'

// Import libs
import React, {Component, PropTypes} from 'react'
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

export default class TrelloColListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let card = this.props.data;
    let labelList = card.labels.map((label, i) => {
      return (
        <span key={label.id} className='card-label' style={{backgroundColor: label.color}}></span>
      )
    });

    let memberList = card.idMembers.map((member, i) => {
      return (
        <span key={member} className='card-member'></span>
      )
    });

    return (
      <li className='trello-col-list-card'>
        <Link to='card' className='col-list-card' style={{backgroundColor: card.background}}>
          <p className='col-list-card-label-list'>{labelList}</p>
          <p className='col-list-card-name'>{card.name}</p>
          <div className='col-list-card-others'>
            <div className='col-list-card-badges'>
              {card.badges.description && <span>Des</span>}
              {card.badges.votes > 0 && <span>{card.badges.votes}v</span>}
              {card.badges.comments > 0 && <span>{card.badges.comments}c</span>}
              {card.badges.checkItems > 0 && <span>{card.badges.checkItemsChecked}/{card.badges.checkItems}</span>}
              {card.badges.attachments > 0 && <span>{card.badges.attachments}a</span>}
              {card.badges.due && <span>T</span>}
            </div>
            <div className='col-list-card-members'>
              {memberList}
            </div>
          </div>
        </Link>
      </li>
    );
  }
}
