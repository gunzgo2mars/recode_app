import { combineReducers } from 'redux'
import cameraReducer from './cameraReducer'
import productReducer from './productReducer'

export default combineReducers({

    camera : cameraReducer,
    product : productReducer

})