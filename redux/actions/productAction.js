import { PRODUCT_MODAL } from './types'

const productModal = (isVisible) => dispatch => {

    dispatch({

        type : PRODUCT_MODAL,
        payload : isVisible

    })

}


export {

    productModal

}