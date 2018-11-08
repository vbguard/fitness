import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './userReducer';
// import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: UserReducer,
});

export default rootReducer;
