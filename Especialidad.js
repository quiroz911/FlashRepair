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
//Lectura de API, provisional archivo JSON
import * as data from "./contratistas.json";
const contratistas = data.contratistas;

export function Especialidad({ route, navigation }) {
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
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 32, marginVertical: 15 }}>
        {nombreEspecialidad}
      </Text>
      <MapScreen>
        
      </MapScreen>
 
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
  );
}
