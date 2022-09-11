import React, { useState } from "react";
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
    width: 150,
    height: 200,
    alignSelf: "center",
    resizeMode: "stretch",
    borderRadius: 20,
  },
  item: {
    backgroundColor: "#C3BFBE",
    paddingVertical: "30%",
    paddingHorizontal: "10%",
    borderRadius: 20,
    marginVertical: "10%",
  },
  title: {
    fontSize: 32,
  },
});
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Mauro",
    score: 5,
    age: 27,
    address: "calle 69",
    field: ["Plomeria"],
  },
];

export function Contratista() {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      score={item.score}
      age={item.age}
      address={item.address}
      field={item.field}
    />
  );
  const Separator = () => <View style={styles.separator} />;
  const Item = ({ title, score, age, address, field }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>
        calificacion promedio: {score.toString()} estrellas
      </Text>
      <Text style={styles.text}>Edad {age} años</Text>
      <Text style={styles.text}>Direccion: {address}</Text>
      <Text style={styles.text}>{field.toString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Johnny_Depp_%28July_2009%29_2.jpg/200px-Johnny_Depp_%28July_2009%29_2.jpg",
        }}
      />

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Button title="Continuar" color="#E8DB15" />
    </View>
  );
}
