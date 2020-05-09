import { createStore } from 'redux'

const INITIAL_STATE = {
  tweets: []
}


const reducer = (store = INITIAL_STATE, action) => {
  return store
}

const store = createStore(reducer)

export { store }
