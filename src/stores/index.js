import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { VenuesReducer } from '../reducers';

let store;
export default {
  initialize: () => {
    const reducers = combineReducers({
      venue: VenuesReducer
    });

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );
    return store;
  },
  currentStore: () => {
    return store;
  }
}