import React from 'react'
import { View , ScrollView , TouchableOpacity } from 'react-native'
// Components & Layouts
import { SimpleHeader } from '../../components/Header'
import { CardWishList } from '../../components/CardList'
// Styles
import { Components } from '../../components/ComponentStyles'

class Wishlist extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            item : [
                {
                    text : "Crew Dragon",
                    rating : "4.7",
                    thumbnail : "https://cdn.vox-cdn.com/thumbor/XVw_KbN9tB8RbacLdGOhuQutJt8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/14262746/CrewDragon_ISS_6k.jpg"
                },

                {
                    text : "Crew Dragon 2",
                    rating : "4.7",
                    thumbnail : "https://cdn.vox-cdn.com/thumbor/XVw_KbN9tB8RbacLdGOhuQutJt8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/14262746/CrewDragon_ISS_6k.jpg"
                },

                {
                    text : "Falcon 9",
                    rating : "4.7",
                    thumbnail : "https://assets.entrepreneur.com/content/3x2/2000/20170220154712-spacex-falcon9.jpeg?width=700&crop=2:1"
                },

                {
                    text : "Falcon Heavy",
                    rating : "4.7",
                    thumbnail : "https://cdn.arstechnica.net/wp-content/uploads/2018/02/FalconHeavy1-980x724.jpg"
                },
            ]

        }

    }

    

    render() {

        const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
            const paddingToBottom = 1
            return layoutMeasurement.height + contentOffset.y >=
              contentSize.height - paddingToBottom
        };
          

        return (
            <View
                style={[Components.flex1]}
            >
                <SimpleHeader title={'Wishlist'} searchButton={true} />
                <View style={[Components.flex9 ]}>
                    <ScrollView
                        style={[ Components.flex1 ]}
                        onScroll={({nativeEvent}) => {
                            if(isCloseToBottom(nativeEvent)) {

                                console.warn('End ScrollView Work!')

                            }
                        }}
                        scrollEventThrottle={400}
                    >
                        {this.state.item.map(data => (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('WishlistProduct')}
                                onLongPress={() => console.warn('Long Press Work!')}
                                
                            >
                                <CardWishList thumbnail={data.thumbnail} title={data.text} rating={data.rating} />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        )

    }

}

export default Wishlist