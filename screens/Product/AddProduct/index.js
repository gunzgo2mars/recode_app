// # Cores
import React from 'react'
import { View , Text } from 'react-native'
// # Redux
import { connect } from 'react-redux'
// # Components

// # Styles
import { Components , Colors } from '../../../components/ComponentStyles'

class AddProduct extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            test : 'test'

        }

    }

    render() {

        return (
            <View style={[Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter]}>
                <Text>{this.state.test}</Text>
            </View>
        )

    }

}


export default connect()(AddProduct)