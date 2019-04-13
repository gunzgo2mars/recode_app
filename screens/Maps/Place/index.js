// # Core
import React from 'react'
import { View , Text } from 'react-native'
// # Redux
import { connect } from 'react-redux'
// # Components & Layouts

// # Styles
import { Colors , Components } from '../../../components/ComponentStyles'


class Place extends React.Component {

    constructor(props) {

        super(props)

    }

    render() {

        return (

            <View style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter ]}>
                <Text style={[ Colors.AmericanRiverText ]}>Place : {this.props.placeId}</Text>
            </View>

        )

    }


}

const mapStateToProps = state => ({

    placeId : state.place.place_id

})

export default connect( mapStateToProps , null)(Place)