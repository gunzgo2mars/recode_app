// #Core
import React from 'react'
import { View , Text , TouchableOpacity , Animated , Easing , Image , ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import axios from 'axios'
// # Services
import { ReadProductByBarCode } from '../../services/API/Read'

// #Redux
import { connect } from 'react-redux'
import { productBackgroundImage , productModal } from '../../redux/actions/productAction'
import { pushToAddProduct } from '../../redux/actions/pushAction'
// #Components & Layouts
import { RkButton , RkTheme } from 'react-native-ui-kitten'
import { Components , width , Colors } from '../ComponentStyles'
import Swiper from 'react-native-swiper'
import Modal from 'react-native-modal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesomePro from 'react-native-vector-icons/FontAwesome5Pro'
import { ListViewReview } from '../../components/ListView'

// Lottie
import anim from '../../lottie/404Product.json'

RkTheme.setType('RkButton', 'icon', {
    fontSize: 24,
    width: 46,
    borderRadius: 25,
    hitSlop: {top: 5, left: 5, bottom: 5, right: 5}
})

class ModalContentRedux extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            activeTab : 'overview',
            isFound : null,
            payload : [],
            progress: new Animated.Value(0),
            notFound : false,
        }

    }

    componentDidMount() {


        ReadProductByBarCode(this.props.barCode)
            .then(res => {

                    if(res.data.length === 0) {

                        console.warn("Length = 0")
                        return 
                    }


                    if(res.data.error) {

                        if(res.data.message === 'sql: no rows in result set') {

                            this.setState({ isFound : false })

                            return

                        }
                        

                    } else {

                        this.setState({ payload : res.data.payload , isFound : true })

                    }

                })
                .catch(err => console.warn(err))
                .then(() => this.props.productBackgroundImage(this.state.payload.thumbnail))


        
        

    }

    _pushToAddProduct = async () => {

        await this.setState({ notFound : true })

        await this.props.pushToAddProduct((this.state.notFound ? true : false))

    }
    

    render() {

        const OverView = () => (
            
                
                <View style={[ Components.flex6 ]}>
                    <View style={[ Components.flex1 , Components.PLL , Components.PTM ]}>
                        <Text
                            style={[ Components.BitterBold , Components.FSM ]}
                        >
                            {this.state.payload.name}
                        </Text>
                    </View>
                    <View style={[ Components.flex1 , Components.PTM , Components.PLL , Components.FlexDirRow ]}>

                        <FontAwesome size={16} name={'dollar'} />
                        <Text style={[ Components.BitterRegular , Components.FSS , Components.MLS ]}>
                            {this.state.payload.price}
                        </Text>
                    </View>
                    <View style={[ Components.flex3 , Components.PTM , Components.PLM ]}>
                        <Text style={[ Components.BitterRegular , Components.FSXS ]}>
                            {this.state.payload.detail}
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
                            source={{ uri : 'http://192.168.122.1:1234/payload/storage/products/gallery/' + this.state.payload.gallery.first_image }}
                            style={[Components.ImagePhotoTab]}
                            resizeMode={'cover'}
                        />
                    </View>
                    <View style={[ Components.flex1]}>
                        <Image 
                            source={{ uri : 'http://192.168.122.1:1234/payload/storage/products/gallery/' + this.state.payload.gallery.second_image }}
                            style={[Components.ImagePhotoTab]}
                            resizeMode={'cover'}
                        />
                    </View>
                    <View style={[ Components.flex1]}>
                        <Image 
                            source={{ uri : 'http://192.168.122.1:1234/payload/storage/products/gallery/' + this.state.payload.gallery.third_image }}
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
                isVisible={(this.state.notFound ? (false) : (this.props.isVisible))}
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
                    {this.state.isFound ? (
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
                    ) : (
                        <View style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter ]}>
                            
                            <View style={[ Components.flex3 , Components.FlexAICenter , Components.FlexJCCenter ]}>

                                <FontAwesome name={'folder-open'} size={width * 0.4} color={'#636e72'} />
                                <Text style={[ Components.MTS , Colors.AmericanRiverText , Components.FSM ]}>
                                    ไม่ข้อมูลสินค้าชนิดนี้
                                </Text>
                            </View>
                            
                            <View style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter ]}>
                                <RkButton rkType='success' >
                                    <TouchableOpacity onPress={() => this._pushToAddProduct()}>
                                        <Text>เพิ่มข้อมูล</Text>
                                    </TouchableOpacity>
                                </RkButton>
                                
                            </View>
                        </View>
                    )}
                </View>
            </Modal>
        )

    }

}

ModalContentRedux.propTypes = {

    onPress : PropTypes.func.isRequired,
    isVisible : PropTypes.bool.isRequired,

}

const mapStateToProps = state => ({

    barCode : state.camera.barCode

})

const ModalContent = connect(mapStateToProps , { productBackgroundImage , productModal , pushToAddProduct })(ModalContentRedux)

export {

    ModalContent

}