import { StyleSheet , Dimensions } from 'react-native'

let width = Dimensions.get('screen').width , height = Dimensions.get('screen').height

const InputStyles = StyleSheet.create({

    BasicInput : { borderColor : '#636e72' , borderWidth : 0.5 , width : (width * 0.7) , height : (height * 0.08) },
    BasicInputS : { borderColor : '#636e72' , borderWidth : 0.5 , width : (width * 0.5) , height : (height * 0.08) },
    
    ContainerRound : { width : (width * 0.7) , height : (height * 0.05)  , marginTop : 10 },
    ContainerRoundS : { width : (width * 0.5) , height : (height * 0.05) , marginTop : 10 },
    RoundInput : { borderColor : '#636e72' , borderWidth : 1 , borderRadius : 5 },
    RoundInputS : { borderColor : '#636e72' , borderWidth : 1 , borderRadius : 5 },


    ContainerLine : { width : (width * 0.85) , height : (height * 0.08) , marginTop : 10 },
    ContainerLineS : { width : (width * 0.5) , height : (height * 0.08) , marginTop : 10 },
    LineInput : { borderColor : '#636e72' },
    LineInputS : { borderColor : '#636e72' }

})


export {

    InputStyles

}