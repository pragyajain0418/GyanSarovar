import "react-native-gesture-handler";
import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomDrawer from '../GyanSarovar/components/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./Homescreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";
import FavoritesScreen from "./Favourites";
import CustomHeader from "./components/customHeader";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader navigation={navigation}  />
      
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#F0E68C",
          },
          
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#424949",
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Favourite" 
          component={FavoritesScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
function ProfileWithHeader({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader navigation={navigation} title="Profile" />
      <ProfileScreen />
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="ज्ञानसरोवर"
        component={MyTabs}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileWithHeader}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
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
