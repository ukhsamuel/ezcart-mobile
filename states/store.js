import {createStore, combineReducers, applyMiddleware} from 'redux';
import user from './reducers/user';
import response from './reducers/response';
import product from './reducers/product';
import orders from './reducers/orders';
import messages from './reducers/message';
import blogs from './reducers/blog';

import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from 'redux-thunk';

const RootReducers = combineReducers({
    user,
    response,
    product,
    orders,
    messages,
    blogs
})

export const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(thunk)));