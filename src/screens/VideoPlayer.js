import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";

import Constant from "expo-constants";

const VideoPlayer = ({ videoId }) => {
  return (
    <View style={styles.videoPlayerConainer}>
      <View style={styles.webView}>
        <WebView source={{ uri: `https://www.youtube.com/embed-${videoId}` }} />
        
      </View>
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
});

export default VideoPlayer;
