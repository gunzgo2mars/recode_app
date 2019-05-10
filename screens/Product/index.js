// #Core
import React from 'react'
import { KeyboardAvoidingView , View , Image , Text , ScrollView , TouchableOpacity , Picker } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'react-native-fetch-blob'
import axios from 'axios'
// # Services
// # Redux
import { connect } from 'react-redux'
import { productModal } from '../../redux/actions/productAction'
// #Components & Layouts
import { Components , Colors , width } from '../../components/ComponentStyles'
import { ModalContent } from '../../components/Modal'
import { SimpleHeader } from '../../components/Header'
import { RkTextInput , RkButton } from 'react-native-ui-kitten'
import { Input } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
}


class Product extends React.Component {

    _isMounted = false


    constructor(props) {

        super(props)
        this.state = {

            isVisible : true,
            payload : [],
            showThumbnail : null,
            thumbnail : null,
            thumbnailName : null,

            firstImage : null,
            showFirstImage : null,
            firstImageName : null,

            secondImage : null,
            showSecondImage : null,
            secondImageName : null,

            thirdImage : null,
            showThirdImage : null,
            thirdImageName : null,

            name : null,
            barcode : null,
            price : null,
            detail : null,

            payloadCategory : [],
            category : null,
            brand : null,



        }



    }

    async componentDidMount() {


        const Request_DATA = {

            record : 10,
            ac_token_api : "AFaEPiGaIuVyWPCWIOkgsXGeXRXxBAVbRUQqFYyRvfvAugwwBnGIRlxAUaAWKkUyQlAcFVWCtGJLNWcFhzfSjOIkXFvWNezHzpiIOGhvmRJifgNGcATCSCCDAXWtmBkscQqmeiQeiBkLJZBgGUWkmQ"

        }

        axios.post('http://192.168.1.27:1234/admin/API/v1/readCategoriesByAdmin' , Request_DATA , {
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {

            if(res.data.length === 0) {

                console.warn('Data is null [o]')

                return

            }

            if(res.data.error) {

                console.warn(res.data.message)

            } else {

                this.setState({ payloadCategory : res.data.payload.category })

            }

        })
        
        if(this._isMounted) {

            this.setState({ isVisible : true })

        }

    }


    componentWillUnmount() {

        this._isMounted = true

    }

    _pickImage = () => {

        ImagePicker.launchCamera(options , (response) => {
            if (response.didCancel) {

                console.warn('User cancelled image picker')

            } else if (response.error) {

                console.warn('ImagePicker Error: ', response.error)

            } else if (response.customButton) {

                console.warn('User tapped custom button: ', response.customButton)

            } else {

                this.setState({

                    
                    showThumbnail : response.uri,
                    thumbnail : response.data,
                    thumbnailName : response.fileName

                })


            }


        })

    }

    _PickFirstImage = () => {

        ImagePicker.launchCamera(options , (response) => {
            if (response.didCancel) {

                console.warn('User cancelled image picker')

            } else if (response.error) {

                console.warn('ImagePicker Error: ', response.error)

            } else if (response.customButton) {

                console.warn('User tapped custom button: ', response.customButton)

            } else {

                this.setState({

                    
                    showFirstImage : response.uri,
                    firstImage : response.data,
                    firstImageName : response.fileName

                })


            }


        })


    }

    _PickSecondImage = () => {

        ImagePicker.launchCamera(options , (response) => {
            if (response.didCancel) {

                console.warn('User cancelled image picker')

            } else if (response.error) {

                console.warn('ImagePicker Error: ', response.error)

            } else if (response.customButton) {

                console.warn('User tapped custom button: ', response.customButton)

            } else {

                this.setState({

                    
                    showSecondImage : response.uri,
                    secondImage : response.data,
                    secondImageName : response.fileName

                })


            }


        })

    }

    _PickThirdImage = () => {

        ImagePicker.launchCamera(options , (response) => {
            if (response.didCancel) {

                console.warn('User cancelled image picker')

            } else if (response.error) {

                console.warn('ImagePicker Error: ', response.error)

            } else if (response.customButton) {

                console.warn('User tapped custom button: ', response.customButton)

            } else {

                this.setState({

                    
                    showThirdImage : response.uri,
                    thirdImage : response.data,
                    thirdImageName : response.fileName

                })


            }


        })


    }

    _uploadProduct = () => {

        let formData = new FormData()

        formData.append('thumbnail_file' , { type : 'image/jpg', uri : this.state.showThumbnail , name : this.state.thumbnailName })

        axios.post('http://192.168.122.1:1234/admin/API/v1/createExtensionProductThumbnail' , formData , {
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        }).then(res => {

            if(res.data.error) {

                console.warn(res.data.message)

            } else {

                let galleryFormData = new FormData()

                galleryFormData.append('first_image' , { type : 'image/jpg', uri : this.state.showFirstImage , name : this.state.firstImageName })
                galleryFormData.append('second_image' , { type : 'image/jpg', uri : this.state.showSecondImage , name : this.state.secondImageName })
                galleryFormData.append('third_image' , { type : 'image/jpg', uri : this.state.showThirdImage , name : this.state.thirdImageName })

                axios.post('http://192.168.122.1:1234/admin/API/v1/createExtensionProductGallery' , galleryFormData , {
                    headers : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }).then(res => {

                    if(res.data.error) {

                        console.warn(res.data.message)

                    } else {

                        const Request_DATA = {
                            name : this.state.name,
                            barcode : this.state.barcode,
                            detail : this.state.detail,
                            price : this.state.price,
                            category : this.state.category,
                            brand : this.state.brand,
                            thumbnail : this.state.thumbnailName,
                            gallery : [
                                {
                                    first_image : this.state.firstImageName,
                                    second_image : this.state.secondImageName,
                                    third_image : this.state.thirdImageName
                                }
                            ],
                            ac_token_api : "AFaEPiGaIuVyWPCWIOkgsXGeXRXxBAVbRUQqFYyRvfvAugwwBnGIRlxAUaAWKkUyQlAcFVWCtGJLNWcFhzfSjOIkXFvWNezHzpiIOGhvmRJifgNGcATCSCCDAXWtmBkscQqmeiQeiBkLJZBgGUWkmQ"
                        }

                        axios.post('http://192.168.122.1:1234/API/v1/createProduct' , Request_DATA , {
                            headers : {
                                'Content-Type' : 'application/json'
                            }
                        })
                        .then(res => {

                            if(res.data.length === 0) {

                                console.warn('Data is null [0]')
                                return

                            }

                            if(res.data.error) {

                                console.warn(res.data.message)

                            } else {

                                console.warn(res.data.message)

                            }

                        })
                        .catch(err => console.log(err))

                        

                    }

                })

            }

        })
        .catch(err => console.warn(err))

    }

    _closeProduct = async () => {

        if(this._isMounted) {

            await this.setState({ isVisible : false })

            
        }

        await this.props.navigation.navigate('Home')

        

    }
    
    render() {

        if(this.props.pushTo.AddProductForm) {
            
            return (
                <View style={[ Components.flex1 ]}>

                    <SimpleHeader title={'เพิ่มข้อมูลสินค้า'} />
                    <KeyboardAvoidingView style={[ Components.flex9 ]}>
                        
                        <ScrollView
                            style={[ Components.flex1 ]}   
                        >
                            <Input
                                placeholder='ชื่อสินค้า'
                                containerStyle={{
                                    marginTop : 20,
                                    width : width * 0.85,
                                    height : width * 0.14
                                }}
                                onChangeText={(text) => this.setState({ name : text })}
                                leftIcon={
                                    <FontAwesome
                                        name='book'
                                        size={16}
                                        color='#2d3436'
                                    />
                                }
                            />

                            <Input
                                placeholder='Barcode (รหัสสินค้า)'
                                containerStyle={{
                                    marginTop : 20,
                                    width : width * 0.85,
                                    height : width * 0.14
                                }}
                                onChangeText={(text) => this.setState({ barcode : text })}
                                leftIcon={
                                    <FontAwesome
                                        name='barcode'
                                        size={16}
                                        color='#2d3436'
                                    />
                                }
                            />

                            <Input
                                placeholder='ราคาสินค้า'
                                containerStyle={{
                                    marginTop : 20,
                                    width : width * 0.85,
                                    height : width * 0.14
                                }}
                                onChangeText={(text) => this.setState({ price : text })}
                                leftIcon={
                                    <FontAwesome
                                        name='tag'
                                        size={16}
                                        color='#2d3436'
                                    />
                                }
                            />

                            <Input
                                placeholder='ข้อมูลรายละเอียด'
                                containerStyle={{
                                    marginTop : 20,
                                    width : width * 0.85,
                                    height : width * 0.14
                                }}
                                onChangeText={(text) => this.setState({ detail : text })}
                                leftIcon={
                                    <FontAwesome
                                        name='tag'
                                        size={16}
                                        color='#2d3436'
                                    />
                                }
                            />

                            <Picker
                                
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({category : itemValue})
                                }
                            >
                                {this.state.payloadCategory.map((data , key) => (
                                    <Picker.Item label={data.category_name} value={data.id} key={key} />
                                ))}
                            </Picker>
                            
                            <RkButton rkType={'dark'}
                                style={{
                                    marginTop : 20
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => this._pickImage()}
                                >
                                    <Text>เลือกรูปภาพ</Text>
                                </TouchableOpacity>
                            </RkButton>

                            <RkButton rkType={'dark'}
                                style={{
                                    marginTop : 20
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => this._PickFirstImage()}
                                >
                                    <Text>เลือกรูปภาพ 1</Text>
                                </TouchableOpacity>
                            </RkButton>

                            <RkButton rkType={'dark'}
                                style={{
                                    marginTop : 20
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => this._PickSecondImage()}
                                >
                                    <Text>เลือกรูปภาพ 2</Text>
                                </TouchableOpacity>
                            </RkButton>

                            <RkButton rkType={'dark'}
                                style={{
                                    marginTop : 20
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => this._PickThirdImage()}
                                >
                                    <Text>เลือกรูปภาพ 3</Text>
                                </TouchableOpacity>
                            </RkButton>
                            
                            <RkButton
                                rkType={'success'}
                                style={{ width : width , height : width * 0.14 }}
                            >
                                <TouchableOpacity
                                    onPress={() => this._uploadProduct()}
                                >
                                    <Text>Upload</Text>
                                </TouchableOpacity>
                            </RkButton>
                            

                        </ScrollView>

                        

                    </KeyboardAvoidingView>
                </View>
            )

        } else {

            return (
                <View style={[ Components.flex1 ]}>
                    <Image 
                        source={{ uri : 'http://192.168.122.1:1234/payload/storage/products/thumbnail/' + this.props.productBackgroundImage }}
                        resizeMode={'cover'}
                        style={[ Components.ImageContent ]}
                    />
                    
                    <ModalContent
                        onPress={() => this._closeProduct()}
                        isVisible={this.state.isVisible}
                    />
                </View>
            )

        }

    }


}

const mapStateToProps = state => ({

    barCode : state.camera.barCode,
    isProductModalVisible : state.product.isProductModalVisible,
    productBackgroundImage : state.product.productBackgroundImage,
    pushTo : state.push

})


export default connect( mapStateToProps , { productModal })(Product)