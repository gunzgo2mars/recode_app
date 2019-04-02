// #Core
import React from 'react'
import { View , TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
// #Styles
import { Components } from '../ComponentStyles'
import IconAwesome from 'react-native-vector-icons/FontAwesome'



const CameraModal = (props) => {

    return (

        <View style={[ Components.flex1 ]}>
            <RNCamera
                ref={cam => {
                    this.camera = cam;
                }}
                style={[ Components.flex1 ]}
            >
                <View style={[ Components.flex1 , Components.FlexAIStart , Components.FlexJCStart ]}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('HomeTab')}>
                        <IconAwesome name={'times'} color={'#FFFFFF'} />
                    </TouchableOpacity>
                </View>
                <View style={[ Components.flex3 ]}>
                
                </View>
                <View style={[ Components.flex1 ]}>
                
                </View>
            </RNCamera>
        </View>
        

    )
        
}


export {

    CameraModal

}