import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './redux/configureStore'
const store = configureStore()

import App from './components/App'

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
)
