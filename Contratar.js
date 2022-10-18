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
  Alert,
} from "react-native";
import CommonDataManager from "./CommonDataManager";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
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
  tinyLogo: {
    position: "relative",
    width: "70%",
    height: "30%",
    alignSelf: "center",
  },
  lineStyle: {
    borderWidth: 0.5,
    width: "90%",
    borderColor: "#767474",
    margin: 10,
  },
  listItem: {},
});

export function Contratar({ route, navigation }) {
  const { id, address, age, field, name, latitude, longitude } = route.params;
  let precioServicio = 0;
  const precioComision = 10000;
  const myLocation = {
    latitude: 37.687,
    longitude: -122.5324,
  };

  if (
    Math.abs(myLocation.longitude) - Math.abs(longitude) > 0.3 ||
    Math.abs(myLocation.latitude) - Math.abs(latitude) > 0.3
  ) {
    precioServicio = 75000;
  } else {
    precioServicio = 50000;
  }

  const createTwoButtonAlert = () =>
    Alert.alert("Confirmación", "¿Desea confirmar el servicio?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          let commonData = CommonDataManager.getInstance();
          commonData.contratarServicio();
          navigation.push("Home");
        },
      },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>
          {name} - {field[0]}
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require("./assets/technical-service.png")}
        ></Image>
        <View style={styles.lineStyle} />
        <Text style={styles.text}>Ubicación contratista: {address}</Text>
        <Text style={styles.text}>Servicio prestado: {field[0]}</Text>
        <Text style={styles.text}>Precio Servicio: $ {precioServicio}</Text>
        <Text style={styles.text}>Precio Comisión: $ {precioComision}</Text>
        <Text style={styles.text}>
          Precio Total: $ {precioServicio + precioComision}
        </Text>
      </View>
      <Button title={"Confirmar servicio"} onPress={createTwoButtonAlert} />
    </SafeAreaView>
  );
}
