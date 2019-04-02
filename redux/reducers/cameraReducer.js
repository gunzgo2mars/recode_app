import { CAMERA_MODAL , CAMERA_SCAN_BARCODE } from '../actions/types'

const initialState = {

    isCameraModalOpen : true,
    barCode : '',


}

export default (state = initialState , action) => {

    switch(action.type){

        case CAMERA_SCAN_BARCODE:
            return {
                ...state,
                barCode : action.barcode
            }
        case CAMERA_MODAL:
            return {
                ...state,
                isCameraModalOpen : action.payload
            }

        default :
            return state

    }

}