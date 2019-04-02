import { StyleSheet , Dimensions } from 'react-native'

let width = Dimensions.get('screen').width , height = Dimensions.get('screen').height

const Button = StyleSheet.create({

    FormButton : {

        width : (width * 0.7),
        height : (height * 0.08),
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : (width * 0.7) / 2,
       

    },

    FormButtonS : {

        width : (width * 0.5),
        height : (height * 0.08),
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : (width * 0.5) / 2

    },

    FBText : { fontSize : width * 0.05 },
    FBTextS : { fontSize : width * 0.05 },

})


export {

    Button

}