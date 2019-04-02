import { PRODUCT_MODAL } from '../actions/types'

const initialState = {

    isProductModalVisible : true

}

export default (state = initialState , action) => {


    switch(action.type) {

        case PRODUCT_MODAL:
            return {
                ...state,
                isProductModalVisible : action.payload
            }

        default:
            return state

    }


}