// screens/SearchScreen

import React, { useState } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
} from "react-native";

const FLICKR_SEARCH_API_URL =
  "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s&text=";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
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
    return (
      <Button
        title="Retry"
        onPress={() => {
          setRetry(false);
          fetchSearchResults();
        }}
      />
    );
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.url_s }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.Logotext}>ज्ञानसरोवर</Text>
      <Text style={styles.subtitle}>स्वाध्याय परम तप:</Text>

      <TextInput
        style={styles.input}
        placeholder="Search...."
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F3F4",
  },
  input: {
    height: 50,
    borderColor: "gray",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "80%",
    marginTop: 20,
    paddingLeft: 12,
    borderRadius: 50,
    fontSize: 18,
    marginBottom: 15,
    backgroundColor: "#fff",
    color: "gray",
  },
  image: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
    margin: 1,
  },
  Logotext: {
    color: "purple",
    fontSize: 60,
    fontFamily: "hindiFont",
  },
  subtitle: {
    color: "green",
    fontSize: 30,
    fontFamily: "hindiFont",
  },
});

export default SearchScreen;
