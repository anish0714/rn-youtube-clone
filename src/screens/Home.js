import React from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";

//Components
import Header from "../components/Header";
import Card from "../components/Card";

//Redux
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const cardData = useSelector((state) => {
    return state;
  });

  return (
    <View style={styles.homeView}>
      <Header />
      <FlatList
        keyExtractor={(item) => item.id.videoId}
        data={cardData}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
  },
});

export default HomeScreen;
