import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import DebounceInput from 'react-debounce-input'
import ScrollWatcher from './ScrollWatcher'
import { search, loadMore } from '../redux/actions'

const Search = ({ onChange, onBottomOfPage }) => {
  return (<div>
    <DebounceInput
      type="text"
      className="search-bar"
      placeholder="Search"
      onChange={onChange}
      debounceTimeout={400}
      forceNotifyByEnter={true}
      forceNotifyOnBlur={true} />
      
    <ScrollWatcher onBottomOfPage={onBottomOfPage} />
  </div>)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => dispatch(search(event.target.value)),
    onBottomOfPage: () => dispatch(loadMore())
  }
}

const mapStateToProps = (state) => {
  const { query, paginationMarker } = state

  return {
    query,
    paginationMarker
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)