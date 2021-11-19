import React from 'react';
import {SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet} from 'react-native'
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const NavigateCard = () => {
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Hey, User</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
            <GooglePlacesAutocomplete
                placeholder="Where to?"
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null) => {
                    dispatch(
                    setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    })
                    );
                    navigation.navigate("RideOptionCard");
                }}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en",
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
        />
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      paddingTop: 20,
      flex: 0,
    },
    textInput: {
      backgroundColor: "#DDDDDF",
      borderRadius: 0,
      fontSize: 18,
    },
    textInputContainer: {
      paddingHorizontal: 20,
      paddingBottom: 0,
    },
  });