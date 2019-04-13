import { StyleSheet , Dimensions } from 'react-native'

const width = Dimensions.get('window').width , height = Dimensions.get('window').height

const Components = StyleSheet.create({

        // Flex tools

        PosAbsolute : { position : 'absolute' },
        PosRelative : { position : 'relative' },

        flex1 : { flex : 1 },
        flex2 : { flex : 2 },
        flex3 : { flex : 3 },
        flex4 : { flex : 4 },
        flex5 : { flex : 5 },
        flex6 : { flex : 6 },
        flex7 : { flex : 7 },
        flex8 : { flex : 8 },
        flex9 : { flex : 9 },

        FlexASCenter : { alignSelf : 'center' },
    
        FlexJCCenter : { justifyContent : 'center' },
        FlexAICenter : { alignItems : 'center'  },
    
        FlexJCStart : { justifyContent : 'flex-start' },
        FlexAIStart : { alignItems : 'flex-start' },
    
        FlexJCEnd : { justifyContent : 'flex-end' },
        FlexAIEnd : { alignItems : 'flex-end' },
    
        FlexDirRow : { flexDirection : 'row' },
        FlexDirCol : { flexDirection : 'column' },
        
        TestBg1 : { backgroundColor : 'blue' },
        TestBg2 : { backgroundColor : 'red' },
    
        // Margin & Padding Tools
        INTP : { padding : 10 },

        MTS : { marginTop : 10 },
        MTM : { marginTop : 20 },
        MTL : { marginTop : 30 },
        PTS : { paddingTop : 10 },
        PTM : { paddingTop : 20 },
        PTL : { paddingTop : 30 },
    
        MLL : { marginLeft : 30 },
        MLM : { marginLeft : 20 },
        MLS : { marginLeft : 10 },
        PLL : { paddingLeft : 30 },
        PLM : { paddingLeft : 20 },
        PLS : { paddingLeft : 10 },
    
        MRL : { marginRight : 30 },
        MRM : { marginRight : 20 },
        MRS : { marginRight : 10 },
        PRL : { paddingRight : 30 },
        PRM : { paddingRight : 20 },
        PRS : { paddingRight : 10 },

        MBL : { marginBottom : 30 },
        MBM : { marginBottom : 20 },
        MBS : { marginBottom : 10 },

        // zIndex Tools

        z1 : { zIndex : 1 },
        z2 : { zIndex : 2 },
        z3 : { zIndex : 3 },
        z4 : { zIndex : 4 },
        z5 : { zIndex : 5 },
        z6 : { zIndex : 6 },
        z7 : { zIndex : 7 },
        z8 : { zIndex : 8 },
        z9 : { zIndex : 9 },
        z0 : { zIndex : 10 },
        


        // CardList
        CardList : { position : 'relative' , flex : 1 , width : (width * 0.28) , height : (height * 0.09) , borderRadius : (width * 0.28) / 16 , overflow : 'hidden'  },
        CardListImage : { position : 'absolute' , width : (width * 0.33) , height : (height * 0.11)  },
        ContainerCard : { flex : 1 , width : (width) , height : ( height * 0.28 ) , justifyContent : 'center' , alignItems : 'center' },
        CardWishList : { width : (width * 0.9) , height : (height * 0.23) , borderRadius : 25  },
        CardThumbnail : { width : (width * 0.25) , height : (width * 0.25) , borderRadius : 10 , marginLeft : 15 },

        // ListViewContent

        ListViewContent : { width : (width * 0.90) , height : (height * 0.2) , borderRadius : (width * 0.75) / 26 , overflow : 'hidden' },
        ListViewContentImage : { width : (width * 0.90) , height : (height * 0.2) , position : 'absolute' },
        ListViewContentCover : { width : (width * 0.90) , height : (height * 0.2) , backgroundColor : 'rgba(45, 52, 54,0.3)' , position : 'absolute' },
        ListViewContentButton : { width : ( width * 0.23 ) , height : (height * 0.045)  , backgroundColor : '#dfe6e9' , padding : 5 , borderRadius : ( width * 0.23 ) / 20 },

        // Modal Camera
        ModalCamera : { flex : 1, width : width , height : (height * 0.8) , borderTopLeftRadius : 10 , borderTopRightRadius : 10 , overflow : 'hidden' , marginBottom : 0 , marginLeft : 0 },
        
        // CameraUI
        
        // Modal Content
        ModalContent : { width : width , height : (height * 0.5) , borderTopLeftRadius : 10 , borderTopRightRadius : 10 , marginBottom : 0 , marginLeft : 0 },
        ModalContentCard : { width : width , height : (height * 0.6) , borderTopLeftRadius : 25 , borderTopRightRadius : 25 , marginBottom : 0 },
        ImageContent : { width : width , height : (height * 0.45) },
        ImagePhotoTab : { width : width , height : (height * 0.52) },
        ReviewListView : { width : (width * 0.85) , height : (height * 0.18) },
        ShadowListView : {
           
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,
            elevation: 13,
            
        },

        // Modal Search
        
        ModalSearch : { width : (width * 0.9) , height : (height * 0.07) , backgroundColor : 'white' , borderRadius : 5 },

        // HeaderThumbnail

        HeaderThumbnail : {

            flex : 1,
            width : width

        },
        
        // Font
        BitterBold : { fontFamily : 'BitterBold' },
        BitterRegular : { fontFamily : 'BitterRegular' },
        FICONS : { fontSize : 8 },
        FSXS : { fontSize : 14 },
        FSS : { fontSize : 18 },
        FSM : { fontSize : 22 },
        FSL : { fontSize : 26 },
        FSXL : { fontSize : 30 },

        CityLight : { color : '#dfe6e9' },

        // Icons

        IconShadow : {
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10
        },

        // Wishlist Products

        TitleWishlistProduct : { width : (width * 0.85) , height : (height * 0.05)  },
        ProductPrimaryData : { width : (width * 0.85) , height : (height * 0.15) },
        DescriptionProduct : { width : (width * 0.83) , height : 'auto' },
        BlankBox : { width : (width * 0.83) , height : (height * 0.10) },
        PrimaryDataProductType : { width : ( width * 0.2 ) , height : (width * 0.21) , borderRadius : 15 , overflow : 'hidden' },
        PrimaryDataRegion : { width : (width * 0.3) , height : (width * 0.21) , borderRadius : 15 , overflow : 'hidden' },
        PrimaryDataRating : { width : (width * 0.25) , height : (width * 0.21) ,  borderRadius : 15 , overflow : 'hidden' },
        ContainerWishlistProductMap : { position : 'absolute' , width : (width * 0.20) , height : (width * 0.20) , zIndex : 9 , 
            right : 10 , top : (height * 0.37)
        },
        ModalPriceFilter : { flex : 1, width : width , height : (height * 0.45) , borderTopLeftRadius : 10 , borderTopRightRadius : 10 , overflow : 'hidden' , marginBottom : 0 , marginLeft : 0 },
        PriceFilter : { width : width , height : (height * 0.45) , borderTopLeftRadius : 10 , borderTopRightRadius : 10 , overflow : 'hidden' , bottom : 0 , marginLeft : 0  },
        FabButtonProductMap : {

            width : (width * 0.15) , height : (width * 0.15) , borderRadius : (width * 0.15 / 2) , backgroundColor : '#55efc4'
            
        },

        // Wishlist Product Maps

        WishlistProductMap : { width : width , height : height },


        // Notifications

        CardContentContainer : {
            width : width , height : ( height * 0.45 ) , flex : 1 , justifyContent : 'center' , alignItems : 'center'
        },
        CardNotificationContent : { width : (width * 0.9) , height : (height * 0.41) },
         
        
        

        

})


const Colors = StyleSheet.create({

    // v1 (Background Colors)

    // (White , Grey & Dark )
    AmericanRiverBG : { backgroundColor : '#636e72' },
    DraculaOrchidBG : { backgroundColor : '#2d3436' },
    CityLightBG : { backgroundColor : '#dfe6e9' },
    SoothingBreezeBG : { backgroundColor : '#b2bec3' },
    LynxWhiteBG : { backgroundColor : '#f5f6fa' },
    // (Green Dark & Light)
    JuneBudBG : { backgroundColor : '#badc58' },
    PureAppleBG : { backgroundColor : '#6ab04c' },

    // v1 (Text Colors)
    // (White , Grey & Dark )
    AmericanRiverText : { color : '#636e72' },
    DraculaOrchidText : { color : '#2d3436' },
    CityLightText : { color : '#dfe6e9' },
    SoothingBreezeText : { color : '#b2bec3' },
    LynxWhiteText : { color : '#f5f6fa' },
    // (Green Dark & Light)
    JuneBudText : { color : '#badc58' },
    PureAppleText: { color : '#6ab04c' },


})

export {

    Components,
    width,
    height,
    Colors

}