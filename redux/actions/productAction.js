import { PRODUCT_MODAL , PRODUCT_BACKGROUND_IMAGE } from './types'

const productModal = (isVisible) => dispatch => {

    dispatch({

        type : PRODUCT_MODAL,
        payload : isVisible

    })

}

const productBackgroundImage = (uri) => dispatch => {

    dispatch({

        type : PRODUCT_BACKGROUND_IMAGE,
        payload : uri

    })

}


export {

    productModal,
    productBackgroundImage

}