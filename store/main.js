import { createReducer } from 'redux-create-reducer'
import { APP } from './actionTypes'

export default createReducer({}, {
  [APP.STARTED] (state) {
    return { ...state, started: true }
  }
})