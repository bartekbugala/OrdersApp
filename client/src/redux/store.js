import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import productions from './reducers/productions.js';
import requests from './reducers/requests';
import sorting from './reducers/sorting';
import main from './reducers/main';

// combine reducers
const rootReducer = combineReducers({
  main,
  productions,
  requests,
  sorting
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
export default store;
