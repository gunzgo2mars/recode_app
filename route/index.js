// #Core
import React from 'react'
import { createStackNavigator , createBottomTabNavigator , createAppContainer , TabBarBottomProps } from 'react-navigation'
import { Platform , Dimensions , View , TochableOpacity } from 'react-native'

// #Redux
import { connect } from 'react-redux'
import { cameraModal } from '../redux/actions/cameraAction'


// #Layouts & Components
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/FontAwesome'
// #Styles
import { Components } from '../components/ComponentStyles'

// #Screens
// Stack
import LoginScreen from '../screens/Login'
import MapsScreen from '../screens/Maps'
import PlaceScreen from '../screens/Maps/Place'
import TagListScreen from '../screens/TagList'
// Tab
import HomeScreen from '../screens/Home'
/// # Tab -> Camera Stack
import CameraScreen from '../screens/Camera'
import ProductScreen from '../screens/Product'

/// # Tab -> Wishlist Stack
import WishlistScreen from '../screens/Wishlist'
import WishlistProductScreen from '../screens/Wishlist/WishlistProduct'

/// # Tab -> Notification Stack
import NotificationScreen from '../screens/Notification'

/// #Tab -> Setting Stack
import SettingScreen from '../screens/Setting'

// #Static Size
let width = Dimensions.get('window').width , height = Dimensions.get('window').height

const Header = () => {

    if(Platform.OS == 'android') {

        return null

    }


}

const MapStack = createStackNavigator({
    
    Maps : {

        screen : MapsScreen,
        navigationOptions : {

            header : Header

        }

    },

    Place : {

        screen : PlaceScreen,
        navigationOptions : {

            header : Header

        }

    }

})

const SettingStack = createStackNavigator({

    Setting : {

        screen : SettingScreen,
        navigationOptions : {

            header : Header,

        },

    }

})

const NotificationStack = createStackNavigator({

    Notification : {
        screen : NotificationScreen,
        navigationOptions : {
            header : Header
        }
    }

})


const WishlistStack = createStackNavigator({

    Wishlist : {
        screen : WishlistScreen,
        navigationOptions : {

            header : Header

        }
    },

    WishlistProduct : {

        screen : WishlistProductScreen,
        navigationOptions : {

            header : Header

        }

    },

    MapWishlist : {

        screen : MapStack,
        navigationOptions : {

            header : Header,

        }

    },

    TagListWishList : {

        screen : TagListScreen,
        navigationOptions : {

            header : Header

        }

    }


})

const CameraStack = createStackNavigator({

    Camera : {

        screen : CameraScreen,
        navigationOptions : {

            header : Header
            
        },
        
    }

})

const HomeStack = createStackNavigator({

    Home : {

        screen : HomeScreen,
        navigationOptions : {
            header : null,

        }

    },

    Product : {

        screen : ProductScreen,
        navigationOptions : {

            header : Header

        }

    }

})



const IndexTab = createBottomTabNavigator({

    
    HomeTab : {
        screen : HomeStack,

    },

    CameraTab : {
        screen : CameraStack,
    },

    WishlistTab : {
        screen : WishlistStack,
    },

    NotificationTab : {
        screen : NotificationStack,
    },

    SettingTab : {

        screen : SettingStack,

    }
   
}, {
    tabBarComponent : ({ navigation }) => (
        <LinearGradient
            style={{ width : width , height : 50 , borderTopLeftRadius : 10 , borderTopRightRadius : 10 , }}
            colors={[ '#d4fc79' , '#96e6a1' ]}
            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        >
            <View style={[  Components.flex1 , Components.FlexDirRow ]}>
                <View style={[ Components.flex1 , Components.FlexJCCenter , Components.FlexAICenter ]}>
                    <Icons name={'home'} onPress={() => navigation.navigate('HomeTab')} size={22} color={'#FFF'} />
                </View>
                <View style={[ Components.flex1 , Components.FlexJCCenter , Components.FlexAICenter ]}>
                    <Icons name={'bookmark'} onPress={() => navigation.navigate('WishlistTab')} size={20} color={'#FFF'} />
                </View>
                <View style={[ Components.flex1 , Components.FlexJCCenter , Components.FlexAICenter ]}>
                    <LinearGradient
                        style={[ Components.MBL , { width : 72 , height : 72 , borderRadius : 72}]}
                        colors={[ '#d4fc79' , '#96e6a1' ]}
                        start={{ x : 0.0 , y : 0.0 }} end={{ x : 0.5 , y : 1.0 }}
                        
                    >
                        <Icons onPress={() => {

                            navigation.navigate('CameraTab')

                        }} name={'plus-circle'} size={68} color={'#FFF'} style={[ { alignSelf : 'center' , marginTop : 1 } ]} />
                    </LinearGradient>
                </View>
                <View style={[ Components.flex1 , Components.FlexJCCenter , Components.FlexAICenter ]}>
                    <Icons name={'bell'} onPress={() => navigation.navigate('NotificationTab')} size={20} color={'#FFF'} />
                </View>
                <View style={[ Components.flex1 , Components.FlexJCCenter , Components.FlexAICenter ]}>
                    <Icons name={'bars'} onPress={() => navigation.navigate('SettingTab')} size={20} color={'#FFF'} />
                </View>
            </View>
        </LinearGradient>
    )
    ,
    animationEnabled : true,
})

connect( null , { cameraModal})(IndexTab)

const IndexStack = createStackNavigator({


    Index : {

        screen : IndexTab,
        navigationOptions : {

            header : Header

        }

    }
    

})

const mapStateToProps = state => ({

    camera : state.isCameraModalOpen

})

const AppContainer = createAppContainer(IndexStack)



export default connect(mapStateToProps , { cameraModal })(AppContainer)