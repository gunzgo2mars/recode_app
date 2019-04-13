import React from 'react'
import { View , ScrollView } from 'react-native'
// Redux

// Components & Layouts
import { SimpleHeader } from '../../components/Header'
import { CardContent } from '../../components/CardList'
// Styles
import { Components } from '../../components/ComponentStyles'


class Notification extends React.Component {

    constructor(props) {

        super(props)

    }

    render() {

        return (

            <View style={[ Components.flex1 ]}>
                <SimpleHeader title={'Notifications'} />
                <View style={[ Components.flex9 ]}>
                    <ScrollView
                        style={[ Components.flex1 ]}
                    >
                        <CardContent />
                    </ScrollView>
                </View>
            </View>

        )

    }

}


export default Notification