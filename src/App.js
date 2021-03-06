import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './home';
import list from './list';
import akun from './akun';
import panorama from './panorama';
import Ootd from './Ootd';
import food from './food';
import sign_Up from './sign_Up';
import login from './login';


import { View, Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const IconBottom = (props) => {
    const { color, focused } = props.data
    let colorSelected = focused ? color : 'grey'
    return (
        <View>
            <Image source={props.image} style={{ width: 20, height: 20, tintColor: colorSelected }} />
        </View>
    )
}

const Router = () => (
   
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'black',
            style: { height: 60 }
        }}
        >
            <Tab.Screen name="home" component={home}
                options={{
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('../src/album/home.png')} />
                    )
                }}
            />
            <Tab.Screen name="list" component={list}
                options={{
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('../src/album/list.png')} />
                    )
                }} />
            <Tab.Screen name="akun" component={akun}
                options={{
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('../src/album/man-user.png')} />
                    )
                }} />

        </Tab.Navigator>
    
)

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="login" component={login} />
                <Stack.Screen name="sign_Up" component={sign_Up} />
                <Stack.Screen name="App" component={App} />
                <Stack.Screen name="akun" component={akun} />
                <Stack.Screen name="/" component={Router} />
                <Stack.Screen name="panorama" component={panorama} />
                <Stack.Screen name="Ootd" component={Ootd} />
                <Stack.Screen name="food" component={food} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
