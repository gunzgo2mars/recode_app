import { StyleSheet , Dimensions } from 'react-native'

let width = Dimensions.get('window').width , height = Dimensions.get('window').height

const HomeLayout = StyleSheet.create({

    // Flex tools
    flex1 : { flex : 1 },
    flex2 : { flex : 2 },
    flex3 : { flex : 3 },
    flex4 : { flex : 4 },
    flex5 : { flex : 5 },
    flex6 : { flex : 6 },
    flex7 : { flex : 7 },
    flex8 : { flex : 8 },
    flex9 : { flex : 9 },

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
    

    // Text

    TabTitle : { fontFamily : 'BitterBold' , fontSize : (width * 0.06) },
    BitterBold : { fontFamily : 'BitterBold' },
    BitterRegular : { fontFamily : 'BitterRegular' },
    FSXS : { fontSize : 14 },
    FSS : { fontSize : 18 },
    FSM : { fontSize : 22 },
    FSL : { fontSize : 26 },
    FSXL : { fontSize : 30 }

})

export {

    HomeLayout

}