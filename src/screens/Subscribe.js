import React from "react";
import { StyleSheet, View, Text } from "react-native";

//Components
import Header from "../components/Header";

const Subscribe = () => {
  return (
    <View style={styles.subscribeConainer}>
      <Header />
      <Text>From Subscribe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subscribeConainer: {
    flex: 1,
  },
});

export default Subscribe;
