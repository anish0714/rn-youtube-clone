import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
//Navigation
import { useNavigation, useTheme } from "@react-navigation/native";

const MiniCard = ({ videoId, title, channel }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textColor = colors.iconColor;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("videoPlayer", [{ videoId: videoId, title: title }])
      }
    >
      <View style={styles.miniCardContainer}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
          style={styles.miniCardImage}
        />
        <View style={styles.miniTextContainer}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={3}
            style={{
              fontSize: 16,
              width: Dimensions.get("screen").width / 2,
              color: textColor,
            }}
          >
            {title}
          </Text>

          <Text style={{ fontSize: 12, color: textColor }}>{channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
