import {combineReducers} from 'redux';
import userAuthReducer from './userAuthReducer';

const myReducer = combineReducers({
    // Add your reducers here
    user: userAuthReducer
})

export default myReducer;