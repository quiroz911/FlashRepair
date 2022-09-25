import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MapScreen } from "./MapScreen";
import React, { useState, useEffect } from "react";

export function Especialidad({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://demo2641371.mockable.io/contratistas")
      .then((response) => response.json())
      .then((json) => setData(json.contratistas))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const contratistas = data;
  const { nombreEspecialidad } = route.params;
  const ListaContratistas = ({ picture, name, id }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#E9E9E9",
          justifyContent: "space-around",
          height: 70,
          alignItems: "center",
          flexDirection: "row",
          margin: "2%",
        }}
        onPress={() =>
          navigation.navigate("Contratista", {
            idContratista: id,
          })
        }
      >
        <Image
          style={{
            width: "15%",
            height: "75%",
            borderRadius: 12,
            resizeMode: "center",
          }}
          source={{
            uri: picture,
          }}
        />
        <Text style={{ fontSize: 25 }}>{name}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <ListaContratistas picture={item.picture} name={item.name} id={item.id} />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 32 }}>{nombreEspecialidad}</Text>
          <MapScreen></MapScreen>

          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <FlatList
              data={contratistas}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}
