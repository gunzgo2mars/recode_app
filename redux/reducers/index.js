import { combineReducers } from 'redux'
import cameraReducer from './cameraReducer'
import productReducer from './productReducer'
import modalReducer from './modalReducer'
import placeReducer from './placeReducer'

export default combineReducers({

    camera : cameraReducer,
    product : productReducer,
    modal : modalReducer,
    place : placeReducer

})