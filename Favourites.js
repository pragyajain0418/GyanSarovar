import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Sample data for favorites
const favoritesData = [
  { id: '1', title: 'Favorite Item 1' },
  { id: '2', title: 'Favorite Item 2' },
  { id: '3', title: 'Favorite Item 3' },
  { id: '4', title: 'Favorite Item 4' },
  { id: '5', title: 'Favorite Item 5' },
];

const FavoritesScreen = () => {

  const renderFavoriteItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritesData}
        renderItem={renderFavoriteItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  listContainer: {
    width: '100%',
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#f34fdf',
  },
  itemText: {
    fontSize: 15,
  },
});

export default FavoritesScreen;
