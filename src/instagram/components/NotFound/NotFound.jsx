'use strict'

import './style.styl'

import React, {Component} from 'react'

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='ins-not-found-wrapper'>
        <div className='ins-title'>Sorry, this page isn't available</div>
        <div className='ins-text'>The link you followed may be broken, or the page may have been removed.
        <a href='https://www.instagram.com/'>Go back to Instagram</a>.</div>
      </div>
    );
  }
}
