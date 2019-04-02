import { CAMERA_MODAL , CAMERA_SCAN_BARCODE } from './types'

const cameraModal = (isModalOpen) => dispatch => {
    
    dispatch({
        type : CAMERA_MODAL,
        payload : isModalOpen
    })

}

const cameraScanBarcode = (barcode , type) => dispatch => {

    
    
    if(type === 'EAN_13') {
        dispatch({

            type : CAMERA_SCAN_BARCODE,
            barcode : barcode,
    
        })  
        
    } else {

        console.warn('Incorrect Barcode type.')

    }

}

export {

    cameraModal,
    cameraScanBarcode


}