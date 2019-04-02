import { StyleSheet , Dimensions } from 'react-native'

let width = Dimensions.get('screen').width , height = Dimensions.get('screen').height

const LoginLayout = StyleSheet.create({

    Container : { flex : 1 , backgroundColor : '#f1f2f6' },

    BasicContainer : { flex : 1 },
    ContainerJSCenter : { justifyContent : 'center' },
    ContainerAICenter : { alignItems : 'center' },
    ContainerJSStart : { justifyContent : 'flex-start' },
    ContainerAIStart : { alignItems : 'flex-start' },
    ContainerJSEnd : { justifyContent : 'flex-end' },
    ContainerAIEnd : { alignItems : 'flex-end' },
    // Component Container

    LogoContainer : { flex : 1 , justifyContent : 'flex-end' , alignItems : 'flex-start' ,  },
    // Logo

    Logo : { marginLeft : width * 0.05 , width : width * 0.25 , height : width * 0.25 },
    LogoText : { fontFamily : 'coolveticarg' , marginLeft : width * 0.05 , fontSize : width * 0.05 },


    FormContainer : { flex : 2 , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'   },

    ButtonContainer : { flex : 2 , },
    // Component Button Container
    NormalContainer : { flex : 2 , justifyContent : 'flex-start' , alignItems : 'center' },
    SocialContainer : { flex : 1 , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'row' },
    ExtensionContainer : { flex : 1 , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column' }

    
    
    
})

export {
    LoginLayout
}