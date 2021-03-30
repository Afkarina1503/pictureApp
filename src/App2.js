import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from '../src/login';
import sign_Up from '../src/sign_Up';
import home from '../src/home';

const Stack = createStackNavigator();
export default function App2() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="home" component={home} />
                <Stack.Screen name="login" component={login} />
                <Stack.Screen name="sign_Up" component={sign_Up} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}