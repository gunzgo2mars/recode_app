// #Core
import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native'

// Layouts & Components
import { HomeLayout } from './Layout'
import { CardListHorizontal } from '../../components/CardList'
import { ListViewContent } from '../../components/ListView'

// Icons
import Icons from 'react-native-vector-icons/FontAwesome'

class Home extends React.Component {


    render() {

        return (

            <View style={[ HomeLayout.flex1 ]}>
                <View style={[ HomeLayout.flex1 , HomeLayout.FlexDirCol ]}>

                    <View style={[ HomeLayout.flex1 , HomeLayout.FlexDirRow ]}>
                        <View style={[ HomeLayout.flex1 , HomeLayout.FlexJCCenter ]}>
                            <Text style={[ HomeLayout.TabTitle , HomeLayout.PLM ]}>Recode</Text>
                        </View>
                        <View style={[ HomeLayout.flex2 , HomeLayout.FlexJCCenter , HomeLayout.FlexAIEnd ]}>
                            <TouchableOpacity style={[ HomeLayout.PRM ]}>
                                <Icons name={'search'} size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[ HomeLayout.flex1 ]}> 
                        <CardListHorizontal />
                    </View>
                </View>
                <View style={[ HomeLayout.flex3 , HomeLayout.FlexDirCol ]}>
                    <View style={[ HomeLayout.flex1 , HomeLayout.FlexJCCenter ]}>
                        <Text style={[ HomeLayout.BitterRegulars , HomeLayout.FSXS , HomeLayout.PLM ]}>Category</Text>
                    </View>
                    <View style={[ HomeLayout.flex9 ]}>
                        <ListViewContent />
                    </View>

                </View>

            </View>

        )

    }


}

export default Home