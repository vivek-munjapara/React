import { combineReducers, createStore } from 'redux'
import CRUDRed from '../Reducer/CRUDRed';

const rootReducer = combineReducers({
    userName: CRUDRed

})
const store = createStore(rootReducer)

export default store;