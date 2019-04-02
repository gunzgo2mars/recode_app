// #Core
import React from 'react'
import { View , TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
// #Redux
import { connect } from 'react-redux'
import { cameraModal , cameraScanBarcode } from '../../redux/actions/cameraAction'
// #Components & Layouts
import Modal from 'react-native-modal'

// #Styles
import { Components } from '../../components/ComponentStyles'
import IconAwesome from 'react-native-vector-icons/FontAwesome'


class Camera extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            isCameraOpen : false

        }

    }

    componentDidMount() {

        this.didFocusListener = this.props.navigation.addListener(
            'didFocus',
            () => { this._initCameraModal() },
        );

    }

    _initCameraModal = () => {

        this.setState({

            isCameraOpen : true

        })

    }

    _closeCamera = async () => {

        await this.setState({ isCameraOpen : false })

        this.props.navigation.navigate('HomeTab')

    }

    _scanBarcode = async (data , type) => {

        await this.props.cameraScanBarcode(data , type)
        
        await this.setState({ isCameraOpen : false })

        this.props.navigation.navigate('Product')

    }

    render() {

        return (
            <View style={[ Components.flex1 , Components.FlexJCCenter , Components.FlexAICenter ]}>
                <Modal
                    isVisible={this.state.isCameraOpen}
                    style={[ Components.flex1 , Components.ModalCamera ]}
                >
                    <View style={[ Components.flex1 ]}>
                        <RNCamera
                            ref={cam => {
                                this.camera = cam;
                            }}
                            style={[ Components.flex1 ]}
                            permissionDialogTitle={'Permission to use camera'}
                            permissionDialogMessage={'We need your permission to use your camera phone'}
                            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                                this._scanBarcode(barcodes[0]['data'] , barcodes[0]['type'])
                            }}
                        >
                            <View style={[ Components.flex1 , Components.FlexAIStart , Components.FlexJCStart , Components.PLM , Components.PTM ]}>
                                <TouchableOpacity onPress={() => this._closeCamera()}>
                                    <IconAwesome name={'times'} color={'#FFFFFF'} size={32} />
                                </TouchableOpacity>
                            </View>
                            <View style={[ Components.flex3 ]}>
                            
                            </View>
                            <View style={[ Components.flex1 ]}>
                            
                            </View>
                        </RNCamera>
                    </View>  
                </Modal>
            </View>
        )

    }

}

const mapStateToProps = state => ({

    camera : state.isCameraModalOpen,

})

export default connect(mapStateToProps , { cameraModal , cameraScanBarcode })(Camera)