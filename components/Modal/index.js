// #Core
import React from 'react'
import { View , Text , TouchableOpacity , Animated , Image , ScrollView } from 'react-native'
import PropTypes from 'prop-types'

// #Redux
import { connect } from 'react-redux'
// #Components & Layouts

import { Components } from '../ComponentStyles'
import Swiper from 'react-native-swiper'
import Modal from 'react-native-modal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ListViewReview } from '../../components/ListView'


class ModalContent extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            activeTab : 'overview',

        }


    }
    

    render() {

        const OverView = () => (
            
                
                <View style={[ Components.flex6 ]}>
                    <View style={[ Components.flex1 , Components.PLL , Components.PTM ]}>
                        <Text
                            style={[ Components.BitterBold , Components.FSM ]}
                        >
                            Pepsi
                        </Text>
                    </View>
                    <View style={[ Components.flex1 , Components.PTM , Components.PLL , Components.FlexDirRow ]}>

                        <FontAwesome size={16} name={'dollar'} />
                        <Text style={[ Components.BitterRegular , Components.FSS , Components.MLS ]}>
                            300
                        </Text>
                    </View>
                    <View style={[ Components.flex3 , Components.PTM , Components.PLM ]}>
                        <Text style={[ Components.BitterRegular , Components.FSXS ]}>
                            React Native lets you build mobile apps using only JavaScript. 
                            It uses the same design as React, letting you compose a rich mobile UI using declarative components.
                        </Text>
                    </View>
                    <View style={[ Components.flex1 ]}>

                    </View>
                </View>
    
            

        )


        const Photo = () => (

            <View style={[Components.flex6]}>
                <Swiper style={[Components.flex1]} dotColor={'#dfe6e9'} activeDotColor={'#2d3436'}>
                    <View style={[ Components.flex1 ]}>
                        <Image 
                            source={{ uri : 'https://static1.squarespace.com/static/5899e78b1b10e35238fba886/t/5bb61d811905f495c2e71d7a/1538661765948/shutterstock_1057480949.jpg?format=750w' }}
                            style={[Components.ImagePhotoTab]}
                            resizeMode={'cover'}
                        /> 
                    </View>
                    <View style={[ Components.flex1]}>
                        <Image 
                            source={{ uri : 'http://www.thebiojournal.com/wp-content/uploads/2017/03/Pepsi-Bottle-1200x639.jpg' }}
                            style={[Components.ImagePhotoTab]}
                            resizeMode={'cover'}
                        />
                    </View>
                    <View style={[ Components.flex1]}>
                        <Image 
                            source={{ uri : 'https://www.pepsicolahudsonvalley.com/wp-content/uploads/2017/10/Pepsi-retouched-e1510352474440.jpg' }}
                            style={[Components.ImagePhotoTab]}
                            resizeMode={'cover'}
                        />
                    </View>
                </Swiper>
            </View>

        )

        const Review = () => (

            <View style={[ Components.flex6 ]}>
                <ScrollView
                    style={[ Components.flex1 ]}
                    snapToAlignment={'center'}
                    contentContainerStyle={[Components.FlexAICenter]}
                >

                    <ListViewReview reviewText={'Review Text!'} avatar={'test'} />

                </ScrollView>
            </View>

        )

        return (
            <Modal
                isVisible={this.props.isVisible}
                backdropOpacity={0.5}
                style={[ Components.ModalContent , Components.flex1 , Components.FlexAIEnd , Components.FlexJCEnd , Components.z7]}
            >
                <TouchableOpacity
                    style={[ Components.PosAbsolute , Components.z8 , { left : 15 , top : 15 } ]}
                    onPress={this.props.onPress}
                >
                    <FontAwesome name={'chevron-left'} size={22} color={'#FFFFFF'} />
                </TouchableOpacity>
                <View style={[ Components.ModalContentCard , { backgroundColor : '#ecf0f1' , overflow : 'hidden' } ]}>
                    <View style={[ Components.flex1 ]}>
                        <View style={[ Components.flex1 , Components.FlexDirRow ]}>
                            <View style={[ Components.flex1 ]}>
                                <TouchableOpacity
                                    style={[ Components.FlexAICenter , Components.FlexJCCenter , Components.flex1 , Components.FlexDirRow ]}
                                    onPress={() => this.setState({ activeTab : 'overview' })}
                                >
                                    <FontAwesome name={'book'} size={16} />
                                    <Text style={[ Components.MLS ]}>Overview</Text>
                                    
                                </TouchableOpacity>
                            </View>
                            <View style={[ Components.flex1 ]}>
                                <TouchableOpacity
                                    style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter , Components.FlexDirRow ]}
                                    onPress={() => this.setState({ activeTab : 'photo' })}
                                >
                                    <FontAwesome name={'image'} size={16} />
                                    <Text style={[ Components.MLS ]}>
                                        Photo
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[ Components.flex1 ]}>
                                <TouchableOpacity
                                    style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter , Components.FlexDirRow ]}
                                    onPress={() => this.setState({ activeTab : 'review' })}                                
                                >
                                    <FontAwesome name={'comments'} size={16} />
                                    <Text style={[ Components.MLS ]}>Reviews</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.activeTab === 'overview' ? <OverView /> : null}
                        {this.state.activeTab === 'photo' ? <Photo /> : null}
                        {this.state.activeTab === 'review' ? <Review /> : null}
                    </View>
                </View>
            </Modal>
        )

    }

}

ModalContent.propTypes = {

    onPress : PropTypes.func.isRequired,
    isVisible : PropTypes.bool.isRequired

}



export {

    ModalContent

}