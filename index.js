/** @format */

import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import { name as appName } from './app.json'
import React from 'react'


const RNRedux = () => <Provider store={store}>
  <App/>
</Provider>

AppRegistry.registerComponent(appName, () => RNRedux)
