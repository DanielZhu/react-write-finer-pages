import './style.styl'

import React, {Component} from 'react'

import CommentItem from '../CommentItem/CommentItem'

export default class CommentList extends Component {
  renderList() {
    return this.props.comments.map((cmt) => {
      return (<CommentItem data={cmt} key={cmt.id}></CommentItem>);
    });
  }
  render() {
    let commentList = this.renderList();
    return (
      <div className='instagram-comment-list'>
        <div>{commentList}</div>
      </div>
    );
  }
}
