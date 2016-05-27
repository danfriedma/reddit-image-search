import React, { PropTypes } from 'react'
import ImageContainer from './ImageContainer'
import Masonry from 'react-masonry-component'

const ImageList = ({ images }) => {
  if (0 == images.length) {
    return <div className="loading">Loading...</div>
  } else {
    return (<Masonry className={'image-list'}>
        {images.map((src, i) => (
          <ImageContainer key={i} src={src} />
          )
        )}
    </Masonry>)
  }
}

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default ImageList