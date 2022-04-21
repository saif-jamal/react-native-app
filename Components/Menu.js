import React from "react";
// import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

const Menu = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Menu;
