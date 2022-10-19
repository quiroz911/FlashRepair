import { StyleSheet, View, Dimensions,
  Text,
  SafeAreaView,
  Button,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList, } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "./mapStyle";
import React, { useState, useEffect } from "react";

export function MapScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getMovies = async () => {
    try {
     const response = await fetch('https://demo2641371.mockable.io/contratistas');
     const json = await response.json();
     setData(json.contratistas);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
 useEffect(() => {
   getMovies();
 }, []);
 const contratistas = data; 
  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 6.23296,
          longitude: -75.587024,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        mapType="terrain"
        showUserLocation={true}>
        {contratistas.map((marker, index) => {
          <MapView.Marker 
              coordinate={{
                latitude: marker.coordinates.latitude,
                longitude: marker.coordinates.longitude
              }}
            />     
          })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
