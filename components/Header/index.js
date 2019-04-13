// Cores
import React from 'react'
import { View , Text , TouchableOpacity , TextInput } from 'react-native'
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'
import { searchModal } from '../../redux/actions/modalAction'
// Components & Layouts
import Icons from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar'
// Styles
import { Components , width } from '../ComponentStyles'

const HeaderThumbnailRedux = (props) => {

    return (
        <View style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter , Components.IconShadow , { borderBottomLeftRadius : 20 , borderBottomRightRadius : 20 , overflow : 'hidden' } ]}>
            <TouchableOpacity
                style={[ Components.PosAbsolute , { top : 30 , left : (width * 0.07)  } , Components.z5 ]}
                onPress={() => props.onBack()}
            >
                <Icons name={'chevron-left'} color={'#f5f6fa'} size={22} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[ Components.PosAbsolute , { top : 30 , right : (width * 0.08) } , Components.z5 ]}
            >
                <Icons name={'share-alt'} style={[ Components.IconShadow ]} color={'#f5f6fa'} size={22} />
            </TouchableOpacity>
            <Image 
                source={{ uri : 'https://cdn.vox-cdn.com/thumbor/XVw_KbN9tB8RbacLdGOhuQutJt8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/14262746/CrewDragon_ISS_6k.jpg' }}
                style={[ Components.HeaderThumbnail , Components.z1 ]}
                indicator={ProgressBar}
                resizeMode={'cover'}
            />
        </View>
    )

}

const SimpleHeaderRedux = (props) => {

    return (

        <View style={[Components.flex1 , Components.FlexDirRow]}>
            {props.searchButton ? (
                <Modal
                    isVisible={props.isVisible}
                    onBackdropPress={() => props.searchModal(!props.isVisible)}
                >
                    <View style={[ Components.flex1 , Components.FlexAICenter ]}>
                        <View style={[ Components.ModalSearch , { overflow : 'hidden' } ]}>
                            <View style={[Components.flex1 , Components.FlexDirRow]}>
                                <View style={[Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter ]}>
                                    <Icons name={'search'} size={16} />
                                </View>
                                <View style={[Components.flex7]}>
                                    <TextInput 
                                        style={[ Components.flex1 ]} 
                                        placeholder={'Search wishlist..'}
                                        autoFocus={true}
                                        returnKeyType={'search'}
                                        onSubmitEditing={() => props.searchModal(!props.isVisible)}
                                    />
                                </View>
                                <View style={[Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter ]}>
                                    <TouchableOpacity>
                                        <Icons name={'times'} size={16} onPress={() => props.searchModal(!props.isVisible)} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            ) : null}
            <View style={[Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter]}>
                {props.backButton ? (
                    <TouchableOpacity
                        onPress={() => props.onBackButton()}
                    >
                        <Icons name={'chevron-left'} size={22} />
                    </TouchableOpacity>
                ) : null}
            </View>
            <View style={[Components.flex4 , Components.FlexAICenter , Components.FlexJCCenter]}>
                <Text style={[Components.FSM]}>{props.title}</Text>
            </View>
            <View style={[Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter]}>
                {props.searchButton ? (
                    <TouchableOpacity
                        onPress={() => props.searchModal(!props.isVisible)}
                    >
                        <Icons name={'search'} size={22} />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>

    )

}

HeaderThumbnailRedux.propTypes = {

    onBack : PropTypes.func

}

SimpleHeaderRedux.propTypes = {

    title : PropTypes.string,
    backButton : PropTypes.bool,
    searchButton : PropTypes.bool,
    onBackButton : PropTypes.func
}

const mapStateToProps = state => ({

    isVisible: state.modal.isOpen

})

const SimpleHeader = connect(mapStateToProps , { searchModal })(SimpleHeaderRedux)
const HeaderThumbnail = connect(null , null)(HeaderThumbnailRedux)

export {

    SimpleHeader,
    HeaderThumbnail

}

