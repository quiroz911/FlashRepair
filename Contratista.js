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
import axios from "axios";

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

export function Contratista({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://demo2641371.mockable.io/contratistas")
      .then((response) => response.json())
      .then((json) => setData(json.contratistas))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const datos = [];
  if (!isLoading) {
    console.log(data);
    const { idContratista } = route.params;
    let contratista = "";
    data.forEach((element) => {
      if (element.id === idContratista) {
        contratista = element;
      }
    });

    datos.push(contratista);
  }

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
      <Text style={styles.text}>
        Calificacion promedio: {score.toString()} estrellas
      </Text>
      <Text style={styles.text}>Edad {age} años</Text>
      <Text style={styles.text}>Direccion: {address}</Text>
      <Text style={styles.text}>{field.toString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <FlatList
            data={datos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

          <Button title="Contratar" color="#E8DB15" />
        </View>
      )}
    </View>
  );
}
