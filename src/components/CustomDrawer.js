import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextWrapper, { customDefaultFontFamily } from '../utils/TextWrapper';

const CustomDrawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                <ImageBackground
                    source={require('../assets/images/menu-bg.jpeg')}
                    style={{ padding: 20 }}>
                    <Image
                        source={require('../assets/images/user-profile.jpg')}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <TextWrapper
                        style={{
                            color: '#fff',
                            fontSize: 18,
                            fontFamily: customDefaultFontFamily,
                            marginBottom: 5,
                        }}>
                        Aditya
                    </TextWrapper>
                    <View style={{ flexDirection: 'row' }}>
                        <TextWrapper
                            style={{
                                color: '#fff',
                                fontFamily: customDefaultFontFamily,
                                marginRight: 5,
                            }}>
                            786 Coins
                        </TextWrapper>
                        <FontAwesome5 name="coins" size={14} color="#fff" />
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="share-social-outline" size={22} />
                        <TextWrapper
                            style={{
                                fontSize: 15,
                                fontFamily: customDefaultFontFamily,
                                marginLeft: 5,
                            }}>
                            Tell a Friend
                        </TextWrapper>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <TextWrapper
                            style={{
                                fontSize: 15,
                                fontFamily: customDefaultFontFamily,
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </TextWrapper>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
