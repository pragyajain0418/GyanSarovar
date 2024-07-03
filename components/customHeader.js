import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu-outline" size={24} color="black" />
      </TouchableOpacity>
      <Image
        source={require('../images/logo.png')} // Adjust the path to your logo image
        style={styles.logo}
        resizeMode="contain"
      />
      {/* <View style={styles.logocontainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headersubTitle}>स्वाध्याय परम तप:</Text>
      </View> */}

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F0E68C',
  },
  logo: {
    width: 120,
    height: 40,
    marginLeft: 20,
  },
  headerTitle: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424949',
  },
  headersubTitle:{
    marginLeft: 20,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#424949',
  },
  logocontainer:{
    flexDirection:"column",
  },
});

export default CustomHeader;
