import React from 'react'
import { View } from 'react-native'
// Components & Layouts
import { SimpleHeader } from '../../components/Header'
// Styles
import { Components } from '../../components/ComponentStyles'

class Wishlist extends React.Component {

    constructor(props) {

        super(props)

        

    }

    render() {

        return (
            <View
                style={[Components.flex1]}
            >
                <SimpleHeader />
                <View style={[Components.flex9 , {backgroundColor : 'red'}]}>

                </View>
            </View>
        )

    }

}

export default Wishlist