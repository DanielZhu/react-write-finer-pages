import './style.styl'
import React, {Component} from 'react'

import CommentList from '../CommentList/CommentList'
import CommentForm from '../CommentForm/CommentForm'

export default class CommentBox extends Component {
  render() {
    return (
      <div className='ins-comment-box'>
        <CommentList comments={this.props.comments.nodes}></CommentList>
        <CommentForm comments={this.props.comments.nodes}></CommentForm>
      </div>
    );
  }
}
