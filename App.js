import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import DrawerContent from './Drawercontent';

import HomeScreen from './Homescreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';
import FavoritesScreen from './Favourites';

const Drawer = createDrawerNavigator();1
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home"> 
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favourite" component={FavoritesScreen} />

    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawercontent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Gallery" component={MyTabs} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}