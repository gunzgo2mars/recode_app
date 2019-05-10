import axios from 'axios'


const ReadProductByBarCode = (barcode) => {

    const Request_DATA = {

        barCode : String(barcode),
        ac_token_api : "AFaEPiGaIuVyWPCWIOkgsXGeXRXxBAVbRUQqFYyRvfvAugwwBnGIRlxAUaAWKkUyQlAcFVWCtGJLNWcFhzfSjOIkXFvWNezHzpiIOGhvmRJifgNGcATCSCCDAXWtmBkscQqmeiQeiBkLJZBgGUWkmQ"

    }

    return axios.post('http://192.168.1.27:1234/API/v1/readBarcode' , Request_DATA, {
        headers : {
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
        }
    })


}


export {

    ReadProductByBarCode

}