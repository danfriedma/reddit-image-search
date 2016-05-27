import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { imageError } from '../redux/actions'

class MaybeImage extends Component {
  constructor(props) {
    super(props)
    this.onError = this.onError.bind(this)
  }

  onError () {
    this.props.onError()
  }

  render () {
    const { src } = this.props
    return (<img className="image" src={src} onError={this.onError} />)
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onError: () => {
      dispatch(imageError(ownProps.src))
    }
  }
}

MaybeImage.PropTypes = {
  src: PropTypes.string.isRequired
}

export default connect(undefined, mapDispatchToProps)(MaybeImage)