import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import DrawerContent from './Drawercontent';

import HomeScreen from "./Homescreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";
import FavoritesScreen from "./Favourites";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F0E68C", // Set the background color of the navigation bar
        },
        headerTintColor: "#fff", // Set the color of the back button and title
        headerTitleStyle: {
          fontWeight: "bold", // Set the title style
          color: "#424949",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favourite" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#BA4A00", // Set the background color of the navigation bar
        },
        headerTintColor: "#fff", // Set the color of the back button and title
        headerTitleStyle: {
          fontWeight: "bold", // Set the title style
        },
      }}
      drawercontent={(props) => <DrawerContent {...props} />}
    >
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
