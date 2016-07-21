import React, {Component} from 'react'
import {Link} from 'react-router'

import './style.styl'

export default class CommentItem extends Component {
  render() {
    return (
      <div className='ins-comment-item'>
        <Link to={'https://www.instagram.com/' + this.props.data.user.username} className='comment-item-username'>{this.props.data.user.username}</Link>
        <span className='comment-item-content'>{this.props.data.text}</span>
      </div>
    );
  }
}
