import { StyleSheet , Dimensions } from 'react-native'

let width = Dimensions.get('window').width , height = Dimensions.get('window').height

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
        
        // Font
        BitterBold : { fontFamily : 'BitterBold' },
        BitterRegular : { fontFamily : 'BitterRegular' },
        FSXS : { fontSize : 14 },
        FSS : { fontSize : 18 },
        FSM : { fontSize : 22 },
        FSL : { fontSize : 26 },
        FSXL : { fontSize : 30 },

        CityLight : { color : '#dfe6e9' }

})

export {

    Components

}