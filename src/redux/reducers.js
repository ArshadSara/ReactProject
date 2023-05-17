import { combineReducers } from 'redux';
import login from './login/reducers';

const reducers = combineReducers({
    login,
});

export default reducers;
