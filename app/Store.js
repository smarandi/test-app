import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './Reducers';

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const middleware = [promise(), thunk, loggerMiddleware];

export default createStore(reducer, applyMiddleware(...middleware));
