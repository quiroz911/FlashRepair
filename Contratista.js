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
<<<<<<< HEAD
    paddingTop: 100,
    backgroundColor: "#9E9E9E",
  },
  stretch: {
    width: 150,
    height: 200,
    marginLeft: 120,
=======
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
>>>>>>> upstream/quiroz
    resizeMode: "stretch",
    borderRadius: 20,
  },
  item: {
<<<<<<< HEAD
    backgroundColor: "#C3BFBE",
    padding: 80,
    marginVertical: 8,
    marginHorizontal: 16,
=======
    flex: 1,
    maxHeight: 500,
    backgroundColor: "#C3BFBE",
    padding: "10%",
    borderRadius: 20,
    marginVertical: "10%",
>>>>>>> upstream/quiroz
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

//Lectura de API, provisional archivo JSON
import * as data from "./contratistas.json";
const contratistas = data.contratistas;

export function Contratista({ route, navigation }) {
  const { idContratista } = route.params;
  let contratista = "";
  contratistas.forEach((element) => {
    if (element.id === idContratista) {
      contratista = element;
    }
  });
  const datos = [];
  datos.push(contratista);

  const renderItem = ({ item }) => (
    <Item
      picture={item.picture}
      title={item.name}
      score={item.score}
      age={item.age}
      address={item.address}
      field={item.field}
    />
  );
  const Separator = () => <View style={styles.separator} />;
  const Item = ({ title, score, age, address, field, picture }) => (
    <View style={styles.item}>
      <Image
        style={styles.stretch}
        source={{
          uri: picture,
        }}
      />
      <Text style={styles.title}>{title}</Text>
<<<<<<< HEAD
      <Text style={styles.text}>calificacion promedio</Text>
      <Text style={styles.text}>Edad 27 años</Text>
      <Text style={styles.text}>Direccion: calle 69</Text>
      <Text style={styles.text}>Plomero</Text>
=======
      <Text style={styles.text}>
        Calificacion promedio: {score.toString()} estrellas
      </Text>
      <Text style={styles.text}>Edad {age} años</Text>
      <Text style={styles.text}>Direccion: {address}</Text>
      <Text style={styles.text}>{field.toString()}</Text>
>>>>>>> upstream/quiroz
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={datos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
<<<<<<< HEAD
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <Button 
      title="Continuar" 
      color = '#E8DB15'
      />
=======

      <Button title="Contratar" color="#E8DB15" />
>>>>>>> upstream/quiroz
    </View>
  );
}
