import { View, Text } from 'react-native'
import React from 'react'
import TextWrapper from '../utils/TextWrapper'

const GameDetailsScreen = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextWrapper>Game Details Screen</TextWrapper>
            <TextWrapper>{route.params?.title}</TextWrapper>
        </View>
    )
}

export default GameDetailsScreen