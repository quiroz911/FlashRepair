// import { StatusBar } from "expo-status-bar";
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
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Especialidad } from "./Especialidad";
import { Contratista } from "./Contratista";
import { Contratar } from "./Contratar";
import CommonDataManager from "./CommonDataManager";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}></View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Especialidad" component={Especialidad} />
          <Stack.Screen name="Contratista" component={Contratista} />
          <Stack.Screen name="Contratar" component={Contratar} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }) {
  let commonData = CommonDataManager.getInstance();
  let numServicios = commonData.getNumServicios();
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Bienvenido, Usuario</Text>
      <View style={styles.lineStyle} />
      <View style={styles.cardsContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Especialidad", {
              nombreEspecialidad: "Plomería",
            })
          }
        >
          <View style={styles.menuCard}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/plomeria.png")}
            ></Image>
            <Text style={styles.textCard}>Plomería</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Especialidad", {
              nombreEspecialidad: "Carpinteria",
            })
          }
        >
          <View style={styles.menuCard}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/carpinteria.png")}
            ></Image>
            <Text style={styles.textCard}>Carpintera</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Especialidad", {
              nombreEspecialidad: "Electricista",
            })
          }
        >
          <View style={styles.menuCard}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/electricista.png")}
            ></Image>
            <Text style={styles.textCard}>Electricista</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Especialidad", {
              nombreEspecialidad: "Pintor",
            })
          }
        >
          <View style={styles.menuCard}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/pintor.png")}
            ></Image>
            <Text style={styles.textCard}>Pintor</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Especialidad", {
              nombreEspecialidad: "Instalaciones",
            })
          }
        >
          <View style={styles.menuCard}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/instalaciones.png")}
            ></Image>
            <Text style={styles.textCard}>Instalaciones</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Especialidad", {
              nombreEspecialidad: "Jardineria",
            })
          }
        >
          <View style={styles.menuCard}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/jardineria.png")}
            ></Image>
            <Text style={styles.textCard}>Jardinería</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        Tiene contratados: {numServicios} servicios
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  navbar: {
    height: "3%",
    backgroundColor: "#323232",
    alignContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DBDBDB",
  },
  title: {
    fontSize: 32,
  },
  lineStyle: {
    borderWidth: 0.5,
    width: "90%",
    borderColor: "#767474",
    margin: 10,
  },
  menuCard: {
    backgroundColor: "#9E9E9E",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 18,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 170,
  },
  textCard: {
    marginTop: 20,
    color: "white",
    fontSize: 18,
  },
  cardsContainer: {
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
