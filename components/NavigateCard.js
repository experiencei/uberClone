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

            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
