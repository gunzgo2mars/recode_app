// #Core
import React from 'react'
import propTypes from 'prop-types'
import { ScrollView , View , Image , Text , TouchableOpacity } from 'react-native'
// Components & Layouts
import CardView from 'react-native-cardview'

// #Styles
import { Components } from '../ComponentStyles'

const ListViewReview = (props) => {

    return (
        <CardView
            cardElevation={8}
            cardMaxElevation={8}
            cornerRadius={5}
            style={[ Components.ReviewListView ]}
        >
            
            <Text>{props.reviewText} - {props.avatar}</Text>
            
        </CardView>
        
    )


}

const ListViewContent = (props) => {

    return (

        <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={false}
            style={[ Components.flex1 , Components.INTP ]}
            bounces={true}
            bouncesZoom={true}
            overScrollMode={'always'}
        >
            <View
                style={[Components.ListViewContent , Components.FlexASCenter , Components.flex1]}
            >
                <View style={[Components.ListViewContentCover , Components.z9]} />
                <View style={[ Components.flex2 ,Components.z0 , Components.FlexDirRow ]}>
                    <View style={[ Components.flex3 , Components.FlexDirCol , Components.PTS , Components.PLS ]}>
                        <Text style={[ Components.BitterBold , Components.FSS , Components.CityLight ]}>Coca Cola</Text>
                        <Text style={[ Components.BitterRegular , Components.FXS , Components.CityLight ]}>
                            Component that wraps platform ScrollView while
                        </Text>
                    </View>
                    <View style={[ Components.flex1 ]}>
                    
                    </View>
                </View>
                <View style={[ Components.flex1 , Components.z0 , Components.FlexDirRow ]}>

                    <TouchableOpacity
                        style={[ Components.ListViewContentButton , Components.MLS ]}
                    >
                        <Text style={[ Components.BitterBold , Components.FSXS ]}>SEE MORE</Text>
                    </TouchableOpacity>

                </View>
                <Image source={require('../../assets/images/box.jpg')} style={[ Components.ListViewContentImage , Components.z1 ]} resizeMode={'cover'} />
            </View>

            <View
                style={[Components.ListViewContent , Components.FlexASCenter , Components.flex1 , Components.MTS]}
            >
                <View style={[Components.ListViewContentCover , Components.z9]} />
                <View style={[ Components.flex2 ,Components.z0 , Components.FlexDirRow ]}>
                    <View style={[ Components.flex3 , Components.FlexDirCol , Components.PTS , Components.PLS ]}>
                        <Text style={[ Components.BitterBold , Components.FSS , Components.CityLight ]}>Coca Cola</Text>
                        <Text style={[ Components.BitterRegular , Components.FXS , Components.CityLight ]}>
                            Component that wraps platform ScrollView while
                        </Text>
                    </View>
                    <View style={[ Components.flex1 ]}>
                    
                    </View>
                </View>
                <View style={[ Components.flex1 , Components.z0 ]}>

                    <TouchableOpacity
                        style={[ Components.ListViewContentButton , Components.MLS ]}
                    >
                        <Text style={[ Components.BitterBold , Components.FSXS ]}>SEE MORE</Text>
                    </TouchableOpacity>

                </View>
                <Image source={require('../../assets/images/box2.png')} style={[ Components.ListViewContentImage , Components.z1 ]} resizeMode={'cover'} />
            </View>

            <View
                style={[Components.ListViewContent , Components.FlexASCenter , Components.flex1 , Components.MTS]}
            >
                <View style={[Components.ListViewContentCover , Components.z9]} />
                <View style={[ Components.flex2 ,Components.z0 , Components.FlexDirRow ]}>
                    <View style={[ Components.flex3 , Components.FlexDirCol , Components.PTS , Components.PLS ]}>
                        <Text style={[ Components.BitterBold , Components.FSS , Components.CityLight ]}>Coca Cola</Text>
                        <Text style={[ Components.BitterRegular , Components.FXS , Components.CityLight ]}>
                            Component that wraps platform ScrollView while
                        </Text>
                    </View>
                    <View style={[ Components.flex1 ]}>
                    
                    </View>
                </View>
                <View style={[ Components.flex1 , Components.z0 ]}>

                    <TouchableOpacity
                        style={[ Components.ListViewContentButton , Components.MLS ]}
                    >
                        <Text style={[ Components.BitterBold , Components.FSXS ]}>SEE MORE</Text>
                    </TouchableOpacity>

                </View>
                <Image source={require('../../assets/images/box3.jpg')} style={[ Components.ListViewContentImage , Components.z1 ]} resizeMode={'cover'} />
            </View>


            <View
                style={[Components.ListViewContent , Components.FlexASCenter , Components.flex1 , Components.MTS]}
            >
                <View style={[Components.ListViewContentCover , Components.z9]} />
                <View style={[ Components.flex2 ,Components.z0 , Components.FlexDirRow ]}>
                    <View style={[ Components.flex3 , Components.FlexDirCol , Components.PTS , Components.PLS ]}>
                        <Text style={[ Components.BitterBold , Components.FSS , Components.CityLight ]}>Coca Cola</Text>
                        <Text style={[ Components.BitterRegular, Components.FXS , Components.CityLight ]}>
                            Component that wraps platform ScrollView while
                        </Text>
                    </View>
                    <View style={[ Components.flex1 ]}>
                    
                    </View>
                </View>
                <View style={[ Components.flex1 , Components.z0 ]}>

                    <TouchableOpacity
                        style={[ Components.ListViewContentButton , Components.MLS ]}
                    >
                        <Text style={[ Components.BitterBold , Components.FSXS ]}>SEE MORE</Text>
                    </TouchableOpacity>

                </View>
                <Image source={require('../../assets/images/box4.jpg')} style={[ Components.ListViewContentImage , Components.z1 ]} resizeMode={'cover'} />
            </View>
            
        </ScrollView>

    )

} 

ListViewReview.PropTypes = {

    avatar : propTypes.string.isRequired,
    reviewText : propTypes.string.isRequired,


}

export {

    ListViewContent,
    ListViewReview

}