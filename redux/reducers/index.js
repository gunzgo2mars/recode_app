import { combineReducers } from 'redux'
import cameraReducer from './cameraReducer'
import productReducer from './productReducer'
import modalReducer from './modalReducer'
import placeReducer from './placeReducer'
import pushReducer from './pushReducer'

export default combineReducers({

    camera : cameraReducer,
    product : productReducer,
    modal : modalReducer,
    place : placeReducer,
    push : pushReducer

})