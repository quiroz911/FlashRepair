import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Button,
  Image,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10%",
    backgroundColor: "#9E9E9E",
  },
  stretch: {
    width: "70%",
    height: "50%",
    alignSelf: "center",
    resizeMode: "stretch",
    borderRadius: 20,
  },
  item: {
    flex: 1,
    maxHeight: 500,
    backgroundColor: "#C3BFBE",
    padding: "10%",
    borderRadius: 20,
    marginVertical: "10%",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginVertical: "10%",
  },
  text: {
    fontSize: 16,
    marginVertical: "2%",
  },
});

export function Contratar({ route, navigation }) {
  const { id, address, age, field, name, latitude, longitude } = route.params;
  // geolocation.requestAuthorization();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Text>{address}</Text>
        <Text>{age}</Text>
        <Text>{field[0]}</Text>
        <Text>{name}</Text>
        <Text>{latitude}</Text>
        <Text>{longitude}</Text>
      </View>
    </SafeAreaView>
  );
}
