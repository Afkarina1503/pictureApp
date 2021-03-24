import * as React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../src/home';
import list from '../src/list';
import Contact from '../src/Contact';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen  name="home" component={home} />
      <Tab.Screen name="list" component={list} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
