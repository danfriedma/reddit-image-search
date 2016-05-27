import React, { PropTypes } from 'react'
import MaybeImage from './MaybeImage'

const ImageContainer = ({ src }) => (
  <div className="grid-item image-container">
    <MaybeImage src={src} />
  </div>)


ImageContainer.propTypes = {
  src: PropTypes.string.isRequired
}

export default ImageContainer