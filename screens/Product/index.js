// #Core
import React from 'react'
import { View , Image } from 'react-native'

// #Redux
import { connect } from 'react-redux'
import { productModal } from '../../redux/actions/productAction'
// #Components & Layouts
import { Components } from '../../components/ComponentStyles'
import { ModalContent } from '../../components/Modal'


class Product extends React.Component {

    _isMounted = false


    constructor(props) {

        super(props)
        this.state = {

            isVisible : true

        }


    }

    componentDidMount() {

        
        if(this._isMounted) {

            this.setState({ isVisible : true })

            console.warn(this.props.barCode)

        }

    }


    componentWillUnmount() {

        this._isMounted = true

    }

    _closeProduct = async () => {

        if(this._isMounted) {

            await this.setState({ isVisible : false })

            
        }

        await this.props.navigation.navigate('Home')

        

    }
    
    render() {

        return (
            <View style={[ Components.flex1 ]}>
                <Image 
                    source={require('../../assets/images/pepsi.jpg')}
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

const mapStateToProps = state => ({

    barCode : state.camera.barCode,
    isProductModalVisible : state.product.isProductModalVisible

})


export default connect( mapStateToProps , { productModal })(Product)