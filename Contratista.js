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
    // paddingTop: 100,
    flex: 1,
    justifyContent: "space-around",
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
    padding: 80,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Mauro",
  },
];

export function Contratista() {
  const renderItem = ({ item }) => <Item title={item.title} />;
  const Separator = () => <View style={styles.separator} />;
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>calificacion promedio</Text>
      <Text style={styles.text}>Edad 27 años</Text>
      <Text style={styles.text}>Direccion: calle 69</Text>
      <Text style={styles.text}>Plomero</Text>
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
