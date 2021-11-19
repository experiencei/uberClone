import React from 'react'
import {FlatList, Text, TouchableOpacity, View, Image } from 'react-native'


const data = [
    {
      id: "123",
      title: "Get a rid",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];

const NavOptions = () => {
    return (
        <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity>
            
        </TouchableOpacity>
      )}
          />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
