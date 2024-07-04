import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.box1}>
          <Image
            source={require("./images/profileicon.jpeg")}
            style={styles.img}
          />
          <Text style={styles.text}>sanyam jain </Text>
          <Text style={styles.email}>sam@gmail.com</Text>
        </View>
        <View style={styles.box2}>
          <View style={styles.flex1}>
            <FontAwesomeIcon icon={faDownload} size={32} />
            <Text>Download </Text>
          </View>
          <View style={styles.flex2}>
            <FontAwesomeIcon icon={faHeart} size={32} />
            <Text>Likes</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Follow Books</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 8,
    marginBottom: 6,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sen serif",
    backgroundColor: "#F0E68C",
  },
  box1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  flex1: {
    justifyContent: "center",
    alignItems: "center",
  },
  flex2: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: 600,
  },
  email: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 5,
  },
  box2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    marginTop: 10,
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  btn: {
    backgroundColor: "#FF6347",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  btntext: {
    fontSize: 16,
    fontWeight: 500,
  },
  card: {
    borderRadius: 8,
    padding: 40,
    backgroundColor: "#FCF3CF",
    shadowColor: "#797D7F",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default ProfileScreen;
