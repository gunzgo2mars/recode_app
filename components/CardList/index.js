// #Core
import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView , View , Image } from 'react-native'
// #Styles
import { Components } from '../ComponentStyles'

const CardBox = (props) => {

    return (

        <View>
            
        </View>

    )


}

const CardListHorizontal = (props) => {
    
    return(
        <ScrollView
            horizontal={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={[ Components.flex1 , Components.FlexDirRow , Components.INTP ]}
        >
            <View style={[ Components.CardList ]}>
                <Image source={require('../../assets/images/CardListImg.jpg')} resizeMode={'cover'} style={[ Components.CardListImage ]} />
            </View>
            <View style={[ Components.CardList , Components.MLS ]}>
                <Image source={require('../../assets/images/CardListImg.jpg')} resizeMode={'cover'} style={[ Components.CardListImage ]} />
            </View>
            <View style={[ Components.CardList , Components.MLS ]}>
                <Image source={require('../../assets/images/CardListImg.jpg')} resizeMode={'cover'} style={[ Components.CardListImage ]} />
            </View>
            <View style={[ Components.CardList , Components.MLS ]}>
                <Image source={require('../../assets/images/CardListImg.jpg')} resizeMode={'cover'} style={[ Components.CardListImage ]} />
            </View>
        </ScrollView>
    )

}


CardBox.propTypes = {

    text : PropTypes.string.isRequired,
    avatar : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired

}

export {

    CardListHorizontal

}