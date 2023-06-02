import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import InformationStack from '../screens/stack/InformationStack';

export default function HomeNavigator() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="InformationStack" 
                component={InformationStack}
                options={{
                    headerShown: false,
                }} 
            />
        </Stack.Navigator>
    )
}