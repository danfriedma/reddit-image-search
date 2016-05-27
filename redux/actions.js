import fetch from 'isomorphic-fetch'

export const search = (query) => {
  return {
    type: 'SEARCH',
    query
  }
}

export const loadMore = () => {
  return (dispatch, getState) => {
    const currentState = getState()
    if(!currentState.isFetching) {
      return dispatch(fetchImages(currentState.query, currentState.paginationMarker))
    }
  }
}

const requestImages = () => {
  return {
    type: 'REQUEST_IMAGES'
  }
}

const receiveImages = (query, json) => {
  return {
    type: 'APPEND_IMAGES',
    query,
    paginationMarker: json.data.after,
    images: json.data.children
      .filter(child => (child.data.post_hint == "image" || child.data.post_hint == "link"))
      .map(child => child.data.url)
  }
}

export const removeImages = () => {
  return {
    type: 'REMOVE_IMAGES'
  }
}

export const fetchImages = (query, paginationMarker) => {
  return dispatch => {
    dispatch(requestImages(query))
    return fetch(buildURL(query, paginationMarker))
      .then(response => response.json())
      .then(json => dispatch(receiveImages(query, json)))
  }
}

const baseURL = "http://www.reddit.com/r/pics"

const buildURL = (query, paginationMarker) => {
  return baseURL + (("" == query) ? 
    withoutQuery(paginationMarker) :
    withQuery(query, paginationMarker)
  )
}

const withoutQuery = (paginationMarker) => {
  return (("" == paginationMarker) ?
    "/hot.json" :
    `/hot.json?count=25&after=${paginationMarker}`
  )
}

const withQuery = (query, paginationMarker) => {
  return (("" == paginationMarker) ?
    `/search.json?q=${query}&restrict_sr=on` :
    `/search.json?q=${query}&restrict_sr=on&count=25&after=${paginationMarker}`
  )
}

export const imageError = (src) => {
  return {
    type: 'IMAGE_ERROR',
    src
  }
}