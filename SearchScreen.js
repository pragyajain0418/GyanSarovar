// screens/SearchScreen.js
import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TextInput, Button, ActivityIndicator, Text } from 'react-native';

const FLICKR_SEARCH_API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s&text=';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [retry, setRetry] = useState(false);

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${FLICKR_SEARCH_API_URL}${query}`);
      const json = await response.json();
      setPhotos(json.photos.photo);
    } catch (error) {
      console.error(error);
      setRetry(true);
    } finally {
      setLoading(false);
    }
  };

  const renderRetryButton = () => {
    if (!retry) return null;
    return <Button title="Retry" onPress={() => { setRetry(false); fetchSearchResults(); }} />;
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.url_s }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={fetchSearchResults}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
      {renderRetryButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    marginBottom: 10,
    paddingLeft: 8,
  },
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    margin: 1,
  },
});

export default SearchScreen;
