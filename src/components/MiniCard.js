import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const MiniCard = ({ videoId, title, channel }) => {
  return (
    <View style={styles.miniCardContainer}>
      <Image
        source={{
          uri:
            `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        }}
        style={styles.miniCardImage}
      />
      <View style={styles.miniTextContainer}>
        <Text 
          ellipsizeMode="tail"
          numberOfLines={3}
          style={styles.miniCardTextTop}
        >
          {title}
        </Text>

        <Text style={styles.miniCardTextBottom}>{channel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  miniCardContainer: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
  },
  miniCardImage: {
    width: "45%",
    height: 100,
  },
  miniTextContainer: {
    paddingLeft: 7,
  },
  miniCardTextTop: {
    fontSize: 16,
    width: Dimensions.get("screen").width / 2,
  },
  miniCardTextBottom: {
    fontSize: 12,
  },
});
export default MiniCard;
