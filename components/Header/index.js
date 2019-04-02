// Cores
import React from 'react'
import { View , Text } from 'react-native'
// Redux
import { connect } from 'react-redux'
// Styles
import { Components } from '../ComponentStyles'

const SimpleHeaderRedux = (props) => {

    return (

        <View style={[Components.flex1 , Components.FlexDirRow]}>
            <View style={[Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter]}>
                <Text>Back</Text>
            </View>
            <View style={[Components.flex4 , Components.FlexAICenter , Components.FlexJCCenter]}>
                <Text>Wishlist</Text>
            </View>
            <View style={[Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter]}>
                <Text>Search</Text>
            </View>
        </View>

    )

}

const SimpleHeader = connect(null , null)(SimpleHeaderRedux)

export {

    SimpleHeader

}

