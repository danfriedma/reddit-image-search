import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Search from './Search'
import ImageList from './ImageList'
import { removeImages, fetchImages } from '../redux/actions'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    const { dispatch, query, paginationMarker } = this.props
    dispatch(fetchImages(query, paginationMarker))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.query !== this.props.query) {
      const { dispatch, query, paginationMarker } = nextProps
      dispatch(removeImages())
      dispatch(fetchImages(query, paginationMarker))
    }
  }

  render () {
    const { images } = this.props
    return (
      <div>
        <Search />
        <ImageList images={images} />
      </div>
    )
  }
}

App.propTypes = {
  query: PropTypes.string.isRequired,
  paginationMarker: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { query, paginationMarker, images, isFetching } = state

  return {
    query,
    paginationMarker,
    images,
    isFetching
  }
}

export default connect(mapStateToProps)(App)