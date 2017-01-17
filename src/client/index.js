import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from '../common/redux/store/configureStore'
import App from '../common/pages/App'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('app')


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)