import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(allReducers, enhancer);

export default store;
