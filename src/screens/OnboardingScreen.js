import { SafeAreaView, StatusBar, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Gaming from '../assets/gaming.svg';
import TextWrapper, { customFontFamilyBold, customFontFamilyMediumItalic } from '../utils/TextWrapper';

const OnboardingScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar barStyle={'light-content'} />
            <View>
                <TextWrapper
                    style={{
                        fontFamily: customFontFamilyBold,
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#20315F',
                        marginTop: 30,
                    }}>
                    GAMEON
                </TextWrapper>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Gaming
                    width={300}
                    height={300}
                    style={{ transform: [{ rotate: '-15deg' }] }}
                />
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{
                    backgroundColor: '#AD40AF',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                    width: '90%',
                    borderRadius: 5,
                    marginBottom: 50,
                }}>
                <TextWrapper
                    style={{
                        fontSize: 18,
                        color: '#fff',
                        fontFamily: customFontFamilyMediumItalic,
                        // fontWeight: 'bold',
                    }}>
                    Let's begin
                </TextWrapper>
                <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default OnboardingScreen;