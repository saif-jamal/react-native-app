// Later on in your styles..
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Button,
  Dimensions,
} from "react-native";

export const Styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Container: {
    position: "relative",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
  },
  containerButtom: {
    position: "absolute",
    width: "100%",
    height: 300,
    bottom: -30,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textTitle: {
    width: "100%",
    left: 10,
    color: "#f2eded",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  userName: {
    width: "100%",
    left: 10,
    color: "white",
    fontSize: 17,
  },
  musicNameBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  textMusicName: {
    color: "#f2eded",
    paddingLeft: 10,
  },
  leftButtomTitle: {
    width: "70%",
  },
  rightButtomTitle: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rightImageMusicContainer: {
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  imageMusic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userEnterAction: {
    position: "absolute",
    width: 200,
    height: 250,
    bottom: 220,
    right: -60,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageUser: {
    width: 50,
    height: 50,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  likes: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  comments: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shaires: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textunderAction: {
    color: "white",
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
  },
  iconsActionStyle: {
    fontSize: 30,
    paddingTop: 15,
  },
});
