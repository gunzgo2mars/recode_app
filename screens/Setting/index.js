import React from 'react'
import { View , Text } from 'react-native'

// Styles
import { Components } from '../../components/ComponentStyles'

class Setting extends React.Component {

    constructor(props) {

        super(props)

    }

    render() {

        return (

            <View style={[Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter]}>
                <Text>Setting Screen.</Text>
            </View>

        )

    }

}

export default Setting