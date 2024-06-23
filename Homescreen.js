// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, ActivityIndicator, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';




const FLICKR_API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=';
const API_KEY = '6f102c62f41998d151e5a1b48713cf13';



const HomeScreen = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    fetchPhotos(page);
  }, [page]);

  const fetchPhotos = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`${FLICKR_API_URL}${page}&api_key=${API_KEY}&format=json&nojsoncallback=1&extras=url_s`);
      const json = await response.json();
      const photosFromApi = json.photos.photo;

      // Retrieve cached photos
      const cachedPhotos = await AsyncStorage.getItem('photos');
      const parsedCachedPhotos = cachedPhotos ? JSON.parse(cachedPhotos) : [];

      const updatedPhotos = page === 1 ? photosFromApi : [...parsedCachedPhotos, ...photosFromApi];

      await AsyncStorage.setItem('photos', JSON.stringify(updatedPhotos));
      setPhotos(updatedPhotos);
    } catch (error) {
      console.error(error);
      setRetry(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
    }
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  const renderRetryButton = () => {
    if (!retry) return null;
    return <Button title="Retry" onPress={() => { setRetry(false); fetchPhotos(page); }} />;
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.url_s }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
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
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    margin: 1,
  },
  
});

export default HomeScreen;
