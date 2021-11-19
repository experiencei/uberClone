import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
     <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  </NavigationContainer>
    </Provider>
  );
}


