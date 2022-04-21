// import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import { Header } from "react-native-elements";
import { Image } from "react-native-elements";
// import Video from "react-native-video";
import VideoElement from "./VideoElement";
import AntDesign from "react-native-vector-icons/AntDesign";
import Posts from "./Posts";
import { Dimensions } from "react-native-web";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

const BASE_URI = "https://source.unsplash.com/random?sig=";

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <SafeAreaView style={{ flex: 1 }}>
        <ActivityIndicator size="large" />
        <FlatList
          data={Posts}
          renderItem={({ item }) => <VideoElement Post={item} />}
          showsVerticalScrollIndicator={false}
          snapToInterval={Dimensions.get("window").height}
          snapToAlignment={"start"}
          decelerationRate="fast"
        />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },
  container: {
    display: "flex",
    backgroundColor: "#000",
    color: "#fff",
    justifyContent: "center",
    padding: 10,
  },
  header: {
    marginTop: 30,
  },
  list: {
    width: "100%",
    backgroundColor: "#000",
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
});
