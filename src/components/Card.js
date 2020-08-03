import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
//Icons
import { MaterialIcons } from "@expo/vector-icons";

//https://www.googleapis.com/youtube/v3/search?q=10&key=[YOUR_API_KEY]
const Card = ({ videoId, title, channel }) => {

  //const videoUrl = !videoId ? 
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardBottom}>
        {/* logo + 2 texts */}
        <MaterialIcons name="account-circle" style={styles.cardIcon} />
        <View style={styles.cardTextContainer}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.cardTextTop}
          >
            {title}
          </Text>
          <Text>{channel}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10,
    // marginBottom: 10
  },
  cardBottom: {
    flexDirection: "row",
    margin: 5,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardIcon: {
    color: "#212121",
    fontSize: 45,
    margin: 5,
  },
  cardTextContainer: {
    marginLeft: 10,
    marginBottom: 20,
  },
  cardTextTop: {
    fontSize: 20,
    width: Dimensions.get("screen").width - 100,
  },
});
export default Card;
