import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <Image
        source={require('/Users/a/Downloads/galleryapp/profileicon.jpeg')}
        style={styles.profileImage}
      />
      <Text>Sanyam Jain</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {

    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default ProfileScreen;
