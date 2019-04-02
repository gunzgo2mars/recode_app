import { SEARCH_MODAL } from './types'

const searchModal = (isOpen) => dispatch => {

    dispatch({

        type : SEARCH_MODAL,
        payload : isOpen

    })

}


export {

    searchModal

}