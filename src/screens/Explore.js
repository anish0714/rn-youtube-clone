import React from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";

//Components
import Header from "../components/Header";
import Card from "../components/Card";

//Redux
import { useSelector } from "react-redux";

const LittleCard = ({ name }) => {
  return (
    <View style={styles.littleCardContainer}>
      <Text style={styles.littleCardText}>{name}</Text>
    </View>
  );
};

const Explore = () => {
  const cardData = useSelector((state) => {
    return state;
  });

  return (
    <View style={styles.exploreConainer}>
      <Header />
      <ScrollView>
        <View style={styles.exploreLittleCardContainer}>
          <LittleCard name="Gaming" />
          <LittleCard name="Trending" />
          <LittleCard name="Music" />
          <LittleCard name="News" />
          <LittleCard name="Movies" />
          <LittleCard name="Fashion" />
        </View>

        <Text style={styles.exploreText}>Trending Videos</Text>

        {cardData.map((item) => {
          return (
            <View key={item.id.videoId}>
              <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
              />
            </View>
          );
        })}

        {/* <FlatList
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
        /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  exploreConainer: {
    flex: 1,
  },
  exploreText: {
    margin: 8,
    fontSize: 22,
    borderBottomWidth: 1,
  },
  littleCardContainer: {
    backgroundColor: "red",
    width: 180,
    borderRadius: 4,
    height: 50,
    marginTop: 10,
  },
  littleCardText: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
  },
  exploreLittleCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

export default Explore;
