import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

function AppStack() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
            // options={{ headerShown: false }}
            />

        </Drawer.Navigator>
    )
}

export default AppStack