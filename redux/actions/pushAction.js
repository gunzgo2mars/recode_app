import { PUSH_ADD_PRODUCT } from './types'

const pushToAddProduct = (isPush) => dispatch => {

    dispatch({

        type : PUSH_ADD_PRODUCT,
        payload : isPush

    })



}

export {

    pushToAddProduct

}