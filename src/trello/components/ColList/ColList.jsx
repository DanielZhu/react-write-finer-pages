'use strict'

// Import stylus files
import './style.styl'

// Import libs
import React, {Component, PropTypes} from 'react'
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

import TrelloColListCard from '../ColListCard/ColListCard';

export default class TrelloColList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  assignCardsToList({lists, cards}) {
    let pairColList = {};

    for (let v of lists) {
      pairColList[v.id] = {brief: v, cards: []};
    }

    for (let card of cards) {
      pairColList[card.idList].cards.push(card);
    }

    return pairColList;
  }
  render() {
    let colList = [];
    let cardMatchList = this.assignCardsToList(this.props.data);
    for (let listId in cardMatchList) {
      let colListCards = [];
      let cards = cardMatchList[listId].cards;
      let cardsBrief = cardMatchList[listId].brief;
      for (let cardId in cards) {
        colListCards.push(<TrelloColListCard data={cards[cardId]} key={cardId} />);
      }

      colList.push(
        <div className='col-list' key={listId}>
          <h4 className='col-list-title'>{cardsBrief.name}</h4>
          <ul className='col-list-cards'>{colListCards}</ul>
          <div className='col-list-cards-addnew'>Add a card...</div>
        </div>
      );
    }
    colList.push(
      <div className='col-list-addnew' key='col-list-addnew'>
        <h4 className='col-list-title'>Add a list...</h4>
      </div>
    );
    return (
      <div className='col-content'>
        {colList}
      </div>
    );
  }
}
