import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Input } from 'react-native-elements'

// Styles
import { InputStyles } from './styles'

const InputForm = (props) => {

    if(props.type === 'basic') {

        if(props.size === 'small') {

            return (
                <Input 

                    label={props.label}
                    placeholder={props.placeholder}
                    inputContainerStyle={[InputStyles.BasicInputS]}
                    leftIcon={{ type: 'MaterialCommunityIcons', name: props.icon }}


                />
            )

        }

        if(props.size === 'large') {

            return (
                <Input 

                    label={props.label}
                    placeholder={props.placeholder}
                    inputContainerStyle={[InputStyles.BasicInput]}
                    leftIcon={{ type: 'MaterialCommunityIcons', name: props.icon }}

                />
            )

        }

    }

    if(props.type === 'round') {

        if(props.size === 'small') {

            return (
                <Input 

                    placeholder={props.placeholder}
                    containerStyle={[InputStyles.ContainerRoundS]}
                    inputContainerStyle={[InputStyles.RoundInputS]}
                    leftIcon={{ type: 'MaterialCommunityIcons', name: props.icon }}

                />
            )


        }

        if(props.size === 'large') {

            return (

                <Input 

                    placeholder={props.placeholder}
                    containerStyle={[InputStyles.ContainerRound]}
                    inputContainerStyle={[InputStyles.RoundInput]}
                    leftIcon={{ type: 'MaterialCommunityIcons', name: props.icon }}

                />

            )
            
        } 

    }

    if(props.type === 'line') {

        if(props.size === 'small') {

            return (
                <Input 

                    placeholder={props.placeholder}
                    containerStyle={[InputStyles.ContainerLineS]}
                    inputContainerStyle={[InputStyles.LineInputS]}
                    leftIcon={{ type: 'MaterialCommunityIcons', name: props.icon }}

                />
            )

        }

        if(props.size === 'large') {

            return (
                <Input 

                    placeholder={props.placeholder}
                    containerStyle={[InputStyles.ContainerLine]}
                    inputContainerStyle={[InputStyles.LineInput]}
                    leftIcon={{ type: 'MaterialCommunityIcons', name: props.icon }}

                />
            )

        }

    }



}

InputForm.propTypes = {

    size : 'small',
    type : 'basic',
    placeholder : "Text Input",
    label : "Label Text"

}

InputForm.propTypes = {

    size : PropTypes.oneOf(['small' , 'large']),
    type : PropTypes.oneOf(['basic' , 'round' , 'line']),
    placeholder : PropTypes.string,
    label : PropTypes.string,
    icon : PropTypes.string.isRequired


}


export {

    InputForm

}