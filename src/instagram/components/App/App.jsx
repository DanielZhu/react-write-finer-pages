import React, {Component} from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import mockData from '../../mocks/list'

import './style.styl'

export default class AppSkeleton extends Component {
  render() {
    return (
      <div className='instagram-skeleton'>
        <Header userinfo={{nickname: mockData.username, id: mockData.id}}></Header>
        <div className='instagram-body'>
          <div>{this.props.children || "Something wrong"}</div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
