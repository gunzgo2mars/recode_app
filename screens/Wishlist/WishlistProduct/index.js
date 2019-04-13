// Cores
import React from 'react'
import { View , Text , ScrollView , TouchableOpacity , Easing } from 'react-native'
import { connect } from 'react-redux'
// Components & Layouts
import { HeaderThumbnail } from '../../../components/Header'
import Rating from 'react-native-rating'
import Icons from 'react-native-vector-icons/FontAwesome'
import CardView from 'react-native-cardview'
import Modal from 'react-native-modal'

// Styles
import { Components , width , Colors } from '../../../components/ComponentStyles'


class WishlistProduct extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            dynamicCurrency : 'USD',
            price : '100M',
            rating : 3,
            maxRating : 5,
            priceFilter : false,

        }

    }


    render() {

        const images = {
            starFilled: require('../../../assets/images/star_filled.png'),
            starUnfilled: require('../../../assets/images/star_unfilled.png')
        }

        return (
            <View style={[ Components.flex1 ]}>
                <Modal
                    isVisible={this.state.priceFilter}
                    onBackdropPress={() => this.setState({ priceFilter : !this.state.priceFilter })}
                    style={[ Components.flex1 , Components.ModalPriceFilter ]}
                    onSwipeComplete={() => this.setState({ priceFilter: !this.state.priceFilter })}
                    swipeDirection="down"
                    
                >
                    <View style={[ Components.PriceFilter , Colors.LynxWhiteBG , Components.PosAbsolute ]}>
                    
                    </View>
                </Modal>
                <View style={[ Components.ContainerWishlistProductMap ]}>
                    
                    <View style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter]}>
                        
                        <CardView 
                            style={[ Components.FabButtonProductMap ]}
                            cardElevation={2}
                            cardMaxElevation={2}
                            cornerRadius={(width * 0.15 / 2)}
                        >

                            <TouchableOpacity 
                                style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter ]}
                                onPress={() => this.props.navigation.navigate('MapWishlist')}
                            >

                                <Icons name={'map-signs'} size={18} color={'#ffffff'} />

                            </TouchableOpacity>

                        </CardView>
                        
                    </View>
                </View>
                <HeaderThumbnail onBack={() => this.props.navigation.goBack()} />
                <ScrollView
                    horizontal={false}
                    style={[ Components.flex1 , Components.INTP ]}
                    contentContainerStyle={[ Components.FlexAICenter ]}
                >

                    <View style={[ Components.TitleWishlistProduct , Components.FlexJCCenter ]}>
                        <Text style={[ Components.FSM , Components.BitterBold ]}>Crew Dragon 2</Text>
                    </View>

                    <View style={[ Components.MTS , Components.ProductPrimaryData  ]}>
                        <View style={[ Components.flex1 , Components.FlexAICenter, Components.FlexDirRow ]}>
                            <View style={[ Components.PrimaryDataProductType , Colors.AmericanRiverBG ]}>
                                <TouchableOpacity 
                                    style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter , Components.FlexDirCol ]}
                                    onPress={() => this.props.navigation.navigate('TagListWishList')}
                                >
                                    <Icons name={'space-shuttle'} size={(width * 0.1)} style={[ Colors.LynxWhiteText ]} />
                                    <Text style={[ Components.BitterRegular , Components.FICONS , Components.MTS , Colors.LynxWhiteText]}>Space Shuttle</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[ Components.PrimaryDataRegion , Colors.AmericanRiverBG , Components.MLS ]}>
                                <TouchableOpacity 
                                    style={[ Components.flex1 , Components.FlexAICenter , Components.FlexDirCol ]}
                                    onPress={() => this.setState({ priceFilter : !this.state.priceFilter })}
                                >
                                    <View style={[ Components.flex1 , Components.FlexAICenter , Components.FlexJCCenter , Components.MTS]}>
                                        <Text style={[ Components.BitterRegular , Colors.LynxWhiteText ]}>Price({this.state.dynamicCurrency})</Text>
                                    </View>
                                    <View style={[ Components.flex2 , Components.FlexAICenter , Components.FlexDirRow ]}>
                                        <Icons name={'tag'} size={(width * 0.07)} style={[ Colors.LynxWhiteText ]} />
                                        <Text style={[ Components.BitterBold , Colors.LynxWhiteText , Components.MLS ]}>
                                            {this.state.price}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={[ Components.PrimaryDataRating , Colors.JuneBudBG , Components.MLS ]}>
                                <View style={[ Components.flex2 , Components.FlexAICenter , Components.FlexJCCenter , Components.FlexDirCol ]}>
                                    <Text style={[ Components.BitterBold , Components.FSXS , Colors.LynxWhiteText ]}>Rating</Text>
                                    <Text style={[ Components.BitterRegular , Components.FSXS , Colors.LynxWhiteText ]}>{this.state.rating} / {this.state.maxRating}</Text>
                                </View>

                                <View style={[ Components.flex1 , Components.FlexAICenter  ]}>
                                    <Rating
                                        onChange={rating => console.log(rating)}
                                        selectedStar={images.starFilled}
                                        unselectedStar={images.starUnfilled}
                                        config={{
                                            easing: Easing.inOut(Easing.ease),
                                            duration: 350
                                        }}
                                        editable={false}
                                        initial={this.state.rating}
                                        max={this.state.maxRating}
                                        stagger={80}
                                        maxScale={0.5}
                                        starStyle={{
                                            width: 15,
                                            height: 15
                                        }}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>
                                        
                    <View style={[ Components.MTS , Components.DescriptionProduct ]}>
                        <Text style={[ Components.FSXS , Components.BitterRegular , Colors.DraculaOrchidText ]}>
                            The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond.
                        </Text>
                    </View>

                    <View style={[ Components.MTS , Components.BlankBox ]}>
                    
                    </View>

                </ScrollView>
            </View>
        )

    }

}

export default WishlistProduct