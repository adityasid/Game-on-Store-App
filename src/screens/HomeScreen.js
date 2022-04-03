import React, { useState } from 'react';
import TextWrapper from '../utils/TextWrapper';
import Feather from 'react-native-vector-icons/Feather';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { freeGames, paidGames, sliderData } from '../model/data';
import BannerSlider from '../components/BannerSlider';
import ListItem from '../components/ListItem';
import { windowWidth } from '../utils/Dimensions';
import CustomSwitch from '../components/CustomSwitch';

function HomeScreen({ navigation }) {
    const [gamesTab, setGamesTab] = useState(1);

    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />;
    };

    const onSelectSwitch = value => {
        setGamesTab(value);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, alignItems: 'center', }}>
                    <TextWrapper style={{ fontSize: 18 }}>
                        Namaste Aditya
                    </TextWrapper>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground
                            source={require('../assets/images/user-profile.jpg')}
                            style={{ width: 35, height: 35 }}
                            imageStyle={{ borderRadius: 25 }}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: '#C6C6C6',
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        alignItems: 'center',
                    }}
                >
                    <Feather name="search" size={20} color="#C6C6C6" style={{ marginRight: 5 }} />
                    <TextInput placeholder="Search"
                        style={{ padding: 0, margin: 0, }}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 15, justifyContent: 'space-between' }}>
                    <TextWrapper style={{ fontSize: 18, }}>
                        Upcoming Games
                    </TextWrapper>
                    <TouchableOpacity onPress={() => { console.log('See all') }}>
                        <TextWrapper style={{ color: '#0aada8' }}>See all</TextWrapper>
                    </TouchableOpacity>
                </View>

                <View>
                    <Carousel
                        // ref={c => {
                        //     this._carousel = c;
                        // }}
                        data={sliderData}
                        renderItem={renderBanner}
                        sliderWidth={windowWidth - 40}
                        itemWidth={300}
                        loop={true}
                    />
                </View>

                <View style={{ marginVertical: 20 }}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="Free to play"
                        option2="Paid games"
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                <View style={{ paddingBottom: 20 }}>
                    {gamesTab === 1 &&
                        freeGames.map(item => (
                            <ListItem
                                key={item.id}
                                photo={item.poster}
                                title={item.title}
                                subTitle={item.subtitle}
                                isFree={item.isFree}
                                price={item.price}
                                onPress={() => {
                                    navigation.navigate('GameDetails', {
                                        title: item.title,
                                        id: item.id,
                                    })
                                }
                                }
                            />
                        ))
                    }

                    {gamesTab === 2 &&
                        paidGames.map(item => (
                            <ListItem
                                key={item.id}
                                photo={item.poster}
                                title={item.title}
                                subTitle={item.subtitle}
                                isFree={item.isFree}
                                price={item.price}
                                onPress={() => {
                                    navigation.navigate('GameDetails', {
                                        title: item.title,
                                        id: item.id,
                                    })
                                }
                                }
                            />
                        ))
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen