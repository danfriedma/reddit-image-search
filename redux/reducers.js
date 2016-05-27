const reducers = (state = {
  query: "",
  paginationMarker: "",
  isFetching: false,
  images: []
}, action) => {
  switch (action.type) {
    case 'SEARCH': 
      return Object.assign({}, state, {
        query: action.query,
        paginationMarker: ""
      })

    case 'LOAD_MORE': {
      return state
    }

    case 'REQUEST_IMAGES':
      return Object.assign({}, state, {
        isFetching: true
      })

    case 'REMOVE_IMAGES':
      return Object.assign({}, state, {
        images: []
      })

    case 'APPEND_IMAGES':
      return Object.assign({}, state, {
        images: state.images.concat(action.images),
        paginationMarker: action.paginationMarker,
        isFetching: false
      })

    case 'IMAGE_ERROR':
      return Object.assign({}, state, {
        images: state.images.filter((src) => src !== action.src)
      })

    default:
      return state
  }
}

export default reducers
