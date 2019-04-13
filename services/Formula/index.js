// All Formula

// # Calculate distance by lat , long

const getDistance = (initlat , initlong , deslat , deslong , unit) => {


    if ((initlat === deslat) && (initlong === deslong)) {

        return 0

    } else {

        let radlat1 = Math.PI * initlat / 180
        let radlat2 = Math.PI * deslat / 180
        let theta = initlong - deslong
        let radtheta = Math.PI * theta / 180
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)

        if(dist > 1) {

            dist = 1

        }

        dist = Math.acos(dist)
        dist = dist * 180 / Math.PI
        dist = dist * 60 * 1.1515

        if(unit === 'K') { dist = dist * 1.609344 }
        if(unit === 'N') { dist = dist * 0.8684 }

        return dist

    }



}

export {

    getDistance
    
}