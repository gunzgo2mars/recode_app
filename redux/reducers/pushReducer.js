import { PUSH_ADD_PRODUCT } from '../actions/types'

const initialState = {

    AddProductForm : false,

}


export default (state = initialState , actions) => {

    switch(actions.type) {

        case PUSH_ADD_PRODUCT : 
            return {
                ...state,
                AddProductForm : actions.payload
            }
        
        default : return state
    }

}