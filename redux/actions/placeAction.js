import { PLACE_CONTENT } from './types'

const placeContent = (place_id) => dispatch => {

    dispatch({

        type : PLACE_CONTENT,
        payload : place_id

    })

}

export {

    placeContent

}