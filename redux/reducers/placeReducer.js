import { PLACE_CONTENT } from '../actions/types'


const initialState = {

    place_id : null

}

export default (state = initialState , action) => {

    switch(action.type) {

        case PLACE_CONTENT : 
            return {
                ...state,
                place_id : action.payload
            }

        default :
            return state
        

    }


}