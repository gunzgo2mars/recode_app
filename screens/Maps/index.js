// # Cores
import React from 'react'
import { View , Text } from 'react-native'

// # Redux 
import { connect } from 'react-redux'
import { placeContent } from '../../redux/actions/placeAction'
// # Components & Layouts
import MapView , { PROVIDER_GOOGLE , Marker }  from 'react-native-maps'
// # Services
import { getDistance } from '../../services/Formula'

// # Styles
import { Components, Colors } from '../../components/ComponentStyles'

class Maps extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            latitude : 37.78825,
            longitude : -122.4324,
            latitudeDelta : 0.0043,
            longitudeDelta : 0.0034,
            km : null,
            error : null,

            markerList : [

                {
                    latitude : 13.784702557529936,
                    longitude : 10.5128568197285,
                    name : 'Seven-Eleven 1',
                    place_id : 1,
                },

                {
                    latitude : 13.784732891265095,
                    longitude : 100.5114277234838,
                    name : 'Seven-Eleven 2',
                    place_id : 2,
                },

                {
                    latitude : 13.786519319843572,
                    longitude : 100.5127219726609,
                    name : 'Seven-Eleven 3',
                    place_id : 3,
                },

                {
                    latitude : 13.784829317026874,
                    longitude : 100.5125737486633,
                    name : 'Seven-Eleven 4',
                    place_id : 4,
                }

            ]

        }

    }

    componentDidMount() {

        setInterval(() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
    
                    this.setState({
    
                        latitude : position.coords.latitude,
                        longitude : position.coords.longitude,
                        

                        km : getDistance(position.coords.latitude , position.coords.longitude , 13.8549967 , 100.5832862 , 'K')
    
                    })
    
                },
                (err) => this.setState({ error : err }),
                { enableHighAccuracy : true , timeout : 20000 , maximumAge : 1000 }
    
            )
            
        }, 5000)

        

    }

    _pushToPlaceScreen = async (placeId) => {

        await this.props.placeContent(placeId)

        await this.props.navigation.navigate('Place')
        

    }

    render() {

        return (
            <View style={[ Components.flex1]}>

                <Text style={[ Components.PosAbsolute , Components.z0 , Colors.AmericanRiverText ,  { top : 20 , left : 20 } ]}>
                   lat : {this.state.latitude} - long : {this.state.longitude}
                </Text>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    style={[ Components.flex1 ]}
                    region={{

                        latitude : this.state.latitude,
                        longitude : this.state.longitude,
                        latitudeDelta : this.state.latitudeDelta,
                        longitudeDelta : this.state.longitudeDelta

                    }}
                >
                    
                    {this.state.markerList.length !== 0 ? (
                        (this.state.markerList.map((data , key) => (
                            <Marker
                                key={key}
                                coordinate={{
                                    latitude : data.latitude,
                                    longitude : data.longitude
                                }}
                                onPress={() => this._pushToPlaceScreen(data.place_id)}
                            />
                        )))
                    ) : null }

                </MapView>
                
            </View>
        )

    }


}


export default connect( null , { placeContent })(Maps)