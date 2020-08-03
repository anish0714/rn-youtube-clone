import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
//Icons
import { Ionicons } from "@expo/vector-icons";
//Components
import MiniCard from "../components/MiniCard";
//Constant
import Constant from "expo-constants";
//Redux
import { useSelector, useDispatch } from "react-redux";

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDW5bCXvPjIsLt8Iph4FU8s5C7UaQIFp3o

const Search = ({ navigation }) => {
  const [text, setText] = useState("");
  // const [miniCardData, setMiniCardData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const miniCardData = useSelector((state) => {
    return state;
  });

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${text}&type=video&key=AIzaSyDW5bCXvPjIsLt8Iph4FU8s5C7UaQIFp3o`
    )
      .then((response) => response.json())
      .then((data) => {
        // setMiniCardData(data.items);
        dispatch({ type: "ADD_VIDEOS", payload: data.items });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchHeader}>
        <Ionicons
          name="md-arrow-back"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.searchTextInput}
        />

        <Ionicons name="md-send" size={32} onPress={() => fetchData()} />
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="red"
          style={styles.activityIndicator}
        />
      ) : null}

      <FlatList
        keyExtractor={(item) => item.id.videoId}
        data={miniCardData}
        renderItem={({ item }) => {
          return (
            <MiniCard
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
  searchContainer: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
  searchHeader: {
    backgroundColor: "white",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 6,
  },
  searchTextInput: {
    width: "70%",
    backgroundColor: "#e6e6e6",
  },
  activityIndicator: {
    marginTop: 20,
  },
});
export default Search;
