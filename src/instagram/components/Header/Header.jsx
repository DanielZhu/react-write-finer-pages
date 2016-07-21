import React, {Component} from 'react'
import {Link} from 'react-router'

import './style.styl'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  showFavList() {

  }
  render() {
    return (
      <header className='ins-header'>
        <div className='ins-header-wrapper'>
          <div className='ins-logo'><a href='/'>Instagram</a></div>
          <div className='ins-middle-placeholder'>
            <input type='text' className='search-box' value='Search'></input>
          </div>
          <ul>
            <li>
              <div>Exp</div>
            </li>
            <li>
              <div onClick={this.showFavList}>Fav</div>
              <div className='ins-fav-menu'>
                zhu_xiaocong mentioned you in a comment: @okiju 对的额1d<br /><br />

                luckylouischen commented: @okiju 😂1d<br /><br />

                queenofmk liked your photo.2d<br /><br />

                queenofmk liked your photo.2d<br /><br />

                queenofmk liked your photo.2d<br /><br />
              </div>
            </li>
            <li>
              <Link to={'/instagram/' + this.props.userinfo.nickname} className='ins-nickname' data-userid={this.props.userinfo.id}>{this.props.userinfo.nickname}</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
