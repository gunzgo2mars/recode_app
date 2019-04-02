import React from 'react'
import PropTypes from 'prop-types'
import { Text , TouchableOpacity } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import LinearGradient from 'react-native-linear-gradient'
import {  } from 'react-native-vector-icons'

// Styles
import { Button } from './styles'

const FormButton = (props) => {

    var colors_payload = [] , text_color = ''

    if(props.colors === 'mean-fruit') { 
        colors_payload = ['#fccb90' , '#d57eeb'] 
        text_color = '#f5f6fa'
    }
    if(props.colors === 'dusty-grass') { colors_payload = ['#d4fc79' , '#96e6a1'] }
    if(props.colors === 'night-fade') { colors_payload = ['#a18cd1' , '#fbc2eb'] }
    if(props.colors === 'love-kiss') { colors_payload = ['#ff0844' , '#ffb199'] }

    if(props.size === "large") {
        return (

            <LinearGradient 
                style={[Button.FormButton]} 
                colors={colors_payload}
                
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            >
                <TouchableOpacity style={[Button.FormButton]}>
                    <Text style={[Button.FBText , { color : props.colors === 'mean-fruit' ? ('#f5f6fa') : null }]}>{props.text}</Text>
                </TouchableOpacity>
            </LinearGradient>
            
    
        )
    }

    if(props.size === "small") {

        return (

            <LinearGradient 
                style={[Button.FormButtonS]} 
                colors={colors_payload}
                
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
            >
                <TouchableOpacity style={[Button.FormButtonS]}>
                    <Text style={[Button.FBTextS]}>{props.text}</Text>
                </TouchableOpacity>
            </LinearGradient>
            
    
        )

        

    }
 
}

FormButton.defaultProps = {

    text : "text button",
    size : 'small',
    colors : 'dusty-grass'

}

FormButton.propTypes = {

    text : PropTypes.string,
    size : PropTypes.oneOf(['small', 'large']),
    colors : PropTypes.oneOf(['dusty-grass' , 'mean-fruit' , 'night-fade' , 'love-kiss'])

}

export {

    FormButton

}