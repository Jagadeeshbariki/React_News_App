import {configureStore} from '@reduxjs/toolkit';
import { appReducer } from '../Reducer/AppReducer';
import logger from 'redux-logger';

export const InitialValue = {
    showLoader:false,
    showErrorpage:false,
    keyword:"news",
    currentArticle:[]
}

export const appStore = configureStore({
    reducer:{         //this is the object of reducers. We can add our number of reducers here
        appReducer
    },
    // middleware:()=>{
    //     return [logger];  //There middleware is used in development mode, it will help to check the state is updating or not
    // }
})