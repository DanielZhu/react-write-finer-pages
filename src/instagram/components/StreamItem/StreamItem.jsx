import './style.styl'

import React, {Component} from 'react'
import CommentBox from '../CommentBox/CommentBox'

export default class StreamItem extends Component {
  splitNumsByThousand(num) {
    let digit = (Math.floor(num) !== num) ? num - Math.floor(num) : '';
    let result = Math.floor(num)
      .toString()
      .split('')
      .reverse()
      .map((char, index) => {
        return (index !== 0 && index % 3 === 0) ? char + ',' : char;
      })
      .reverse()
      .join('')
      + digit;

    console.log(num + '/' + result);
    return result;
  }
  calcTime(timestamp) {
    let timeDiff = '...'
    timestamp *= 1000;

    let now = Date.now();
    let diffTotal = now - timestamp;

    let diffByDay = Math.floor(diffTotal / (24 * 60 * 60 * 1000));
    diffTotal -= diffByDay * 24 * 60 * 60 * 1000;

    let diffByHour = Math.floor(diffTotal / (60 * 60 * 1000));
    diffTotal -= diffByHour * 60 * 60 * 1000;

    let diffByMinute = Math.floor(diffTotal / (60 * 1000));
    diffTotal -= diffByMinute * 60 * 1000;

    let diffBySecond = Math.floor(diffTotal / 1000);
    diffTotal -= diffBySecond * 1000;

    if (diffByDay > 0) {
      timeDiff = diffByDay + 'd'
    }
    else if (diffByHour > 0) {
      timeDiff = diffByHour + 'h'
    }
    else if (diffByMinute > 0) {
      timeDiff = diffByMinute + 'm'
    }
    // else if (diffBySecond > 0) {
    //   diff = diffBySecond + 's'
    // }

    return timeDiff;
  }
  render() {
    return (
      <div className='instagram-stream-item'>
        <div className='owner-and-time'>
          <div className='owner'>
            <img src={this.props.data.owner.profile_pic_url} className='owner-pic' />
            <span className='owner-name'>{this.props.data.owner.username}</span>
          </div>
          <div className='time'>{this.calcTime(this.props.data.date)}</div>
        </div>
        <div className='media'>
          <img src={this.props.data.display_src} />
        </div>
        <div className='other-sns'>
          <div className='sns-likes'>{this.splitNumsByThousand(this.props.data.likes.count)} likes</div>
          <div>
            <span className='sns-owner-nickname'>{this.props.data.owner.username}</span>
            {this.props.data.caption}
          </div>
          <div className='sns-comments'>view all {this.splitNumsByThousand(this.props.data.comments.count)} comments</div>
          <CommentBox comments={this.props.data.comments}></CommentBox>
        </div>
      </div>
    );
  }
}
