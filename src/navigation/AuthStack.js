import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            // options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
            // options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

export default AuthStack