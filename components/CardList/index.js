// #Core
import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView , View , Image , Text , TouchableOpacity } from 'react-native'

// Components & Layouts
import CardView from 'react-native-cardview'
import Icons from 'react-native-vector-icons/FontAwesome'
// #Styles
import { Components , width , height , Colors } from '../ComponentStyles'

const CardWishList = (props) => {

    return (

        <View style={[ Components.ContainerCard ]}>

            <CardView
                style={[ Components.CardWishList ]}
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={10}
                key={props.key}
            >

                <View style={[ Components.flex1 , Components.FlexDirRow ]}>
                    <View style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter ]}>
                        <Image resizeMode={'cover'} style={[ Components.CardThumbnail ]} source={{ uri : props.thumbnail }} />
                    </View>
                    <View style={[ Components.flex2 , Components.FlexDirCol ]}>
                        <View style={[ Components.flex1 , Components.FlexJCCenter  ]}>
                            <Text style={[ Components.BitterBold , Components.FSM , Components.MLM , Components.MTM ]}>
                                {props.title}
                            </Text>
                        </View>
                        <View style={[ Components.flex1 , Components.FlexJCCenter , Components.FlexDirRow ]}>
                            <View style={[ Components.flex1 , Components.FlexJCCenter ]}>
                                <Text style={[ Components.BitterRegular , Components.FSM , Components.MLM , Components.MBM ]}>
                                    {props.rating}
                                </Text>
                            </View>
                            <View style={[ Components.flex1 , Components.FlexJCCenter  ]}>
                                
                            </View>
                        </View>
                    </View>
                </View>
            
            </CardView>

        </View>

    )

}

const CardBox = (props) => {

    return (

        <View></View>

    )


}

const CardContent = (props) => {

    return (

        <View style={[ Components.CardContentContainer , Components.MTS ]}>

            <CardView
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={5}
                style={[ Components.CardNotificationContent ]}
            >
                <View style={[ Components.flex1 ]}>
                    <View style={[ Components.flex3 , { overflow : 'hidden' } , Components.PosRelative ]}>
                        <TouchableOpacity
                            style={[ { width : (width * 0.09) , height : (width * 0.09) , borderRadius : (width * 0.09) / 2 , top : (width * 0.03) , right : (width * 0.02)  } , Components.PosAbsolute , Components.z7   ]}
                            onPress={() => console.warn('Extension Button!')}
                        >
                            <View style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter ]}>
                                <Icons name={'ellipsis-v'} style={[ Colors.LynxWhiteText , Components.z7 ]} size={(width * 0.07)} />
                            </View>
                        </TouchableOpacity>

                        <Text
                            style={[ Components.z7 , Components.PosAbsolute , Components.FSS , { bottom : (width * 0.02) , left : (width * 0.04) , color : 'white' } ]}
                        >
                            Starship
                        </Text>                        

                        <Image 
                            source={{ uri : 'https://cdn.teslarati.com/wp-content/uploads/2018/11/BFR-2018-spaceship-and-booster-sep-SpaceX-crop.jpg' }} 
                            resizeMode={'cover'} 
                            style={[ Components.flex1 , { width : (width * 0.90)  } , Components.z1 ]}
                        />
                    </View>
                    <View style={[ Components.flex2 , Components.PLM , Components.PTM , Components.PRM ]}>
                        <Text>
                            You want to wake up in the morning and think the future is going to be great
                        </Text>
                    </View>
                    <View style={[ Components.flex1 ]}>

                    </View>
                </View>
            </CardView>

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

    CardListHorizontal,
    CardWishList,
    CardContent

}