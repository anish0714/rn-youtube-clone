import React from "react";
import { Text, View, StyleSheet } from "react-native";

//Icons
import { FontAwesome5, FontAwesome, MaterialIcons } from "@expo/vector-icons";

//Constant
import Constant from "expo-constants";

//Navigation
import { useNavigation, useTheme } from "@react-navigation/native";

//redux
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const myColor = colors.iconColor;

  //dispatch
  const dispatch = useDispatch();
  //selector
  const currentTheme = useSelector((state) => {
    return state.myDarkMode;
  });

  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        height: 40,
        backgroundColor: colors.headerColor,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 10,
      }}
    >
      <View style={styles.headerLeft}>
        {/* Icon and YOUTUBE */}
        <FontAwesome5 name="youtube" style={styles.youtubeIcon} />
        <Text
          style={{
            fontSize: 22,
            marginLeft: 5,
            fontWeight: "bold",
            color: myColor,
          }}
        >
          YouTube
        </Text>
      </View>
      <View style={styles.headerRight}>
        <FontAwesome
          name="video-camera"
          style={{ color: myColor, fontSize: 32, margin: 5 }}
        />
        <FontAwesome
          name="search"
          onPress={() => navigation.navigate("search")}
          style={{ color: myColor, fontSize: 32, margin: 5 }}
        />
        <MaterialIcons
          name="account-circle"
          onPress={() =>
            dispatch({ type: "CHANGE_THEME", payload: !currentTheme })
          }
          style={{ color: myColor, fontSize: 32, margin: 5 }}
        />
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
