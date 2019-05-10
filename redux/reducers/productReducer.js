import { PRODUCT_MODAL , PRODUCT_BACKGROUND_IMAGE } from '../actions/types'

const initialState = {

    isProductModalVisible : true,
    productBackgroundImage : null

}

export default (state = initialState , action) => {


    switch(action.type) {

        case PRODUCT_MODAL:
            return {
                ...state,
                isProductModalVisible : action.payload
            }

        case PRODUCT_BACKGROUND_IMAGE : 
            return {
                ...state,
                productBackgroundImage : action.payload
            }

        default:
            return state

    }


}