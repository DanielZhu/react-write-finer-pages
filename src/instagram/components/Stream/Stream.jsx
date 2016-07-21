import './style.styl'

import React, {Component} from 'react'

import StreamItem from '../StreamItem/StreamItem'
import mockData from '../../mocks/list'

export default class Stream extends Component {
  renderList() {
    return mockData.feed.media.nodes.map((node) => {
      return (<StreamItem data={node} key={node.code}></StreamItem>);
    });
  }
  render() {
    let streamList = this.renderList();
    return (
      <div className='instagram-stream'>
        <div>{streamList}</div>
        <div className='ins-stream-load-more'>Load more</div>
      </div>
    );
  }
}
