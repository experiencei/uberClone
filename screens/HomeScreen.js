import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import NavOptions from "../components/NavOptions";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                     }}
                source={{
                    uri: "https://links.papareact.com/gzs"
                   }}
                />
            <GooglePlacesAutocomplete
             placeholder="Where from?"
             styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
            }}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
             }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
             />
              <NavOptions/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
