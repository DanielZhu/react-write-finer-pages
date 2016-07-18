'use strict'

// Import stylus files
import './style.styl'

// Import libs
import React, {Component, PropTypes} from 'react'
import TrelloBoardBrief from '../BoardBrief/BoardBrief';

export default class TrelloBoardBriefList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  findBoardIdsByOrgIds(orgIds){
    let boardCol = this.props.data.boards.filter((board) => {
      return orgIds.indexOf(board.idOrganization) !== -1;
    });
    return boardCol.map((board) => {
      return board.id;
    });
  }
  findBoardsByIds(ids) {
    return this.props.data.boards.filter((board) => {
      return ids.indexOf(board.id) !== -1;
    });
  }
  findBoardsByOrgId(orgId) {
    return this.props.data.boards.filter((board) => {
      return board.idOrganization === orgId;
    });
  }
  render() {
    let boardBriefListCol = [];

    // Filter Starred
    let boardStarredIds = this.props.data.boardStars.map((item, i) => {
      return item.idBoard;
    });
    let starredBoardList = this.findBoardsByIds(boardStarredIds);

    let boardListDom = starredBoardList.map((board) => {
      board.starred = boardStarredIds.indexOf(board.id) !== -1;
      return (<TrelloBoardBrief data={board} key={board.id} externTeam='true' />);
    });

    boardBriefListCol.push(
      <div className='brief-list-section' key='starred'>
        <h4 className='brief-list-section-title starred-board'>Starred Boards</h4>
        <ul className='brief-list-section-content'>{boardListDom}</ul>
      </div>
    );

    // My boards(exclude starred, org's)
    let boardIdsFromOrg = this.findBoardIdsByOrgIds(this.props.data.idOrganizations);
    let boardStarIds = this.props.data.boardStars.map(function (board) {
      return board.id;
    });

    let myBoardIds = this.props.data.idBoards.map((idBoard) => {
      if (boardIdsFromOrg.indexOf(idBoard) === -1 && boardStarIds.indexOf(idBoard) === -1) {
        return idBoard;
      }
    });
    let myBoardList = this.findBoardsByIds(myBoardIds);

    let myBoardListDom = myBoardList.map((board) => {
      board.starred = boardStarredIds.indexOf(board.id) !== -1;
      return (<TrelloBoardBrief data={board} key={board.id} />);
    });

    myBoardListDom.push(<TrelloBoardBrief addNew='true' key='board_add_new' />);

    boardBriefListCol.push(
      <div className='brief-list-section' key='board_starred'>
        <h4 className='brief-list-section-title my-board'>My Boards</h4>
        <ul className='brief-list-section-content'>{myBoardListDom}</ul>
      </div>
    );

    // Filter Orgs
    let orgBoardsList = this.props.data.organizations.map((org, i) => {
      let orgBoards = this.findBoardsByOrgId(org.id);

      let orgBoardList = orgBoards.map((board) => {
        board.starred = boardStarredIds.indexOf(board.id) !== -1;
        return (<TrelloBoardBrief data={board} key={board.id} />);
      });
      orgBoardList.push(<TrelloBoardBrief addNew='true' key='board_add_new' />);

      return (
        <div className='brief-list-section' key={org.id}>
          <h4 className='brief-list-section-title organization-board'>
            {org.displayName}
            <div className='trello-icon-btn'>
              <img src='src/assets/icons/board.png' className='suffix-icon'></img>
              <span className='label'>Boards</span>
            </div>
            <div className='trello-icon-btn'>
              <img src='src/assets/icons/peoples.png' className='suffix-icon'></img>
              <span className='label'>Members</span>
            </div>
            <div className='trello-icon-btn'>
              <img src='src/assets/icons/board.png' className='suffix-icon'></img>
              <span className='label'>Setting</span>
            </div>
          </h4>
          <ul className='brief-list-section-content'>{orgBoardList}</ul>
        </div>
      );
    });

    boardBriefListCol = boardBriefListCol.concat(orgBoardsList);

    return (
      <div className='trello-board-brief-list-wrapper'>
        {boardBriefListCol}
      </div>
    );
  }
}
