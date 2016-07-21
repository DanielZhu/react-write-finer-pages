import React, {Component} from 'react'

import './style.styl'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {label: 'ABOUT US', href: 'javascript:;'},
        {label: 'SUPPORT', href: 'javascript:;'},
        {label: 'BLOG', href: 'javascript:;'},
        {label: 'PRESS', href: 'javascript:;'},
        {label: 'API', href: 'javascript:;'},
        {label: 'JOBS', href: 'javascript:;'},
        {label: 'PRIVACY', href: 'javascript:;'},
        {label: 'TERMS', href: 'javascript:;'},
      ]
    }
  }
  render() {
    let footerItems = this.state.items.map((item) => {
      return (<a href={item.href} className='footer-item' key={item.label.toLowerCase().replace(/\s+/g, '')}>{item.label}</a>);
    });
    return (
      <footer className='ins-footer'>
        <div className='footer-items'>{footerItems}</div>
        <div className='footer-copyright'>© 2016 INSTAGRAM</div>
      </footer>
    );
  }
}
