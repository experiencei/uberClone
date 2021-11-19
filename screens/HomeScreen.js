import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full pt-10 pl-5 `}>
            <Text>I am HomeScreen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
