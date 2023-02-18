import { combineReducers, createStore } from 'redux'
import counterReducer from '../reducer/counterReducer'
import productReducer from '../reducer/productReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer
})
const store = createStore(rootReducer)

export default store;