import React from "react";
import { Text, View, StyleSheet } from "react-native";

//Icons
import { FontAwesome5, FontAwesome, MaterialIcons } from "@expo/vector-icons";

//Constant
import Constant from "expo-constants";

//Navigation
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        {/* Icon and YOUTUBE */}
        <FontAwesome5 name="youtube" style={styles.youtubeIcon} />
        <Text style={styles.youtubeText}>YouTube</Text>
      </View>
      <View style={styles.headerRight}>
        <FontAwesome name="video-camera" style={styles.headerRightIcons} />
        <FontAwesome
          name="search"
          onPress={() => navigation.navigate("search")}
          style={styles.headerRightIcons}
        />
        <MaterialIcons name="account-circle" style={styles.headerRightIcons} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: Constant.statusBarHeight,
    height: 40,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 10,
  },
  headerLeft: {
    flexDirection: "row",
    margin: 5,
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 150,
  },
  youtubeIcon: {
    marginLeft: 10,
    color: "red",
    fontSize: 32,
  },
  youtubeText: {
    fontSize: 22,
    marginLeft: 5,
    fontWeight: "bold",
    color: "#212121",
  },
  headerRightIcons: {
    color: "#212121",
    fontSize: 32,
    margin: 5,
  },
});
export default Header;
