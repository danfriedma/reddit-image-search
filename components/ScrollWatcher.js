import React, { Component, PropTypes } from 'react'

class ScrollWatcher extends Component {
  constructor(props) {
    super(props)
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll () {
    if ((window.innerHeight + window.scrollY + 500) >= document.body.offsetHeight) {
        this.props.onBottomOfPage()
    }
  }

  render () { return null }
}

ScrollWatcher.PropTypes = {
  onBottomOfPage: PropTypes.func.isRequired
}

export default ScrollWatcher