import { SEARCH_MODAL } from '../actions/types'

const initialState = {

    isOpen : false

}

export default (state = initialState , action) => {

    switch(action.type) {

        case SEARCH_MODAL :
            return {
                ...state,
                isOpen : action.payload
            }

    }

}