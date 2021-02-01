import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

import Constant from "expo-constants";
//blob:https://www.youtube.com/27e980a2-41f8-4542-8563-c17d6eea8fda
//https://www.youtube.com/embed/videoseries?list=${videoId}
const VideoPlayer = ({ route }) => {
  const { videoId, title } = route.params[0];
  return (
    <View style={styles.videoPlayerConainer}>
      <View style={styles.webView}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{
            uri: `https://www.youtube.com/embed/${videoId}`,
          }}
        />
      </View>
      <Text
        ellipsizeMode="tail"
        numberOfLines={2}
        style={styles.videoPlayerText}
      >
        This is title {title}
      </Text>
      <View stylr={styles.emptyView} />
    </View>
  );
};

const styles = StyleSheet.create({
  videoPlayerConainer: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
  webView: {
    width: "100%",
    height: 200,
  },
  videoPlayerText: {
    fontSize: 20,
    width: Dimensions.get("screen").width - 50,
    margin: 9,
  },
  emptyView: {
    borderBottomWidth: 1,
  },
});

export default VideoPlayer;
