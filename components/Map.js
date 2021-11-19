import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from "react-native-maps";


const Map = () => {
    return (
        <MapView
        ref={mapRef}
        style={tw`flex-1`}
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />
    )
}

export default Map

const styles = StyleSheet.create({})
