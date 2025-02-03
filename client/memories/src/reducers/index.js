import {combineReducers} from 'redux';


import posts from './posts';
import auth from './authReducers';


  

export default combineReducers(
    {
        posts,
        auth,

    }

);