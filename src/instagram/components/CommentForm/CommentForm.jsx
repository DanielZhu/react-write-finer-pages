import React, {Component} from 'react'

import './style.styl'

export default class CommentForm extends Component {
  render() {
    return (
      <div className='ins-comment-form'>
        <div className='comment-form-like-btn'>Like</div>
        <div className='comment-form-input-wrapper'><input type='text' className='comment-form-input' placeholder='Add a comment...' /></div>
        <div className='comment-form-more-btn'>...</div>
      </div>
    );
  }
}
