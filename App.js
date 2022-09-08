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
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Image
          style={styles.tinyLogo}
          source={require("./assets/menu-hamburger.png")}
        ></Image>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido, Usuario</Text>
        <View style={styles.lineStyle} />
        <View style={styles.cardsContainer}>
          <View style={styles.menuCard}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/plomeria.png")}
            ></Image>
            <Text style={styles.textCard}>Plomería</Text>
          </View>
          <View style={styles.menuCard}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/plomeria.png")}
            ></Image>
            <Text style={styles.textCard}>Plomería</Text>
          </View>
          <View style={styles.menuCard}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/plomeria.png")}
            ></Image>
            <Text style={styles.textCard}>Plomería</Text>
          </View>
          <View style={styles.menuCard}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/plomeria.png")}
            ></Image>
            <Text style={styles.textCard}>Plomería</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  navbar: {
    height: "7%",
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
    color: "white",
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
