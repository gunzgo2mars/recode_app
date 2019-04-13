// # Cores
import React from 'react'
import { View , Text , ScrollView } from 'react-native'
// # Redux
import { connect } from 'react-redux'

// # Components & Layouts
import { SimpleHeader } from '../../components/Header'
// # Styles
import { Components , Colors } from '../../components/ComponentStyles'

// # Service


class TagList extends React.Component {

    constructor(props) {

        super(props)

    }

    render() {

        return (

            <View style={[ Components.flex1 ]}>
                <SimpleHeader title={'Top 5'} onBackButton={() => this.props.navigation.goBack()} backButton={true} searchButton={false} />
                <View style={[ Components.flex9 ]}>
                    <ScrollView
                        onScrollEndDrag={() => console.warn('End Drag Work!')}
                    >


                    </ScrollView>
                </View>
            </View>

        )

    }

}

export default TagList