import {
    createStore,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// middleware are functions that console log our data then it passes it on
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;