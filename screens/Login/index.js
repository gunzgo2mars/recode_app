import React from 'react'
import { View , Text , KeyboardAvoidingView , Image , Platform } from 'react-native'
import { Input } from 'react-native-elements'
// Login Layout
import { LoginLayout } from './layout'

// Components
import { FormButton } from '../../components/Button'
import { InputForm } from '../../components/Input'

class Login extends React.Component {

    constructor(props) {

        super(props)

    }

    render() {

        
        return (

            <KeyboardAvoidingView 
                
                style={[LoginLayout.Container]}
                enabled={false}
                keyboardVerticalOffset={200}
            >

                <View style={[LoginLayout.LogoContainer]}>
                    <Image resizeMode={'contain'} source={require('../../assets/images/Logo.png')} style={[LoginLayout.Logo]} />
                    <Text style={[LoginLayout.LogoText]}>
                        Recode , Scan your product u funkin' cunt !
                    </Text>
                </View>
                <View style={[LoginLayout.FormContainer]}>

                    <InputForm 
                        label={'Email'}
                        placeholder={'Email'} 
                        type={'line'} 
                        size={'large'}
                        icon={'mail'}
                    />

                    <InputForm 
                        label={'Email'}
                        placeholder={'Password'} dashboard_login
                        type={'line'} 
                        size={'large'}
                        icon={'lock'}
                    />
                
                </View>
                <View style={[LoginLayout.ButtonContainer]}>
                    <View style={[LoginLayout.NormalContainer]}>
                        <FormButton size={'large'} text={'LOGIN'} colors={'dusty-grass'} />
                    </View>
                    <View style={[LoginLayout.SocialContainer]}>
                    
                    </View>
                    <View style={[LoginLayout.ExtensionContainer]}>
                    </View>
                </View>
            </KeyboardAvoidingView>

        )
    }

}

export default Login