import React from 'react';
import {SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet} from 'react-native'
import tw from "tailwind-react-native-classnames";

const NavigateCard = () => {
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Hey, User</Text>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
