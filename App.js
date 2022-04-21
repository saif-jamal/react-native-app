// import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  Text,
  View,
} from "react-native";
import { Header } from "react-native-elements";
import { Image } from "react-native-elements";
// import Video from "react-native-video";
// import VideoElement from "./Components/VideoElement";
import AntDesign from "react-native-vector-icons/AntDesign";
// import Posts from "./Components/Posts";
import { Dimensions } from "react-native-web";
import Menu from "./Components/Menu";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Menu from "./Components/Menu";
const BASE_URI = "https://source.unsplash.com/random?sig=";

// const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <Menu />
    </View>
  );
}
