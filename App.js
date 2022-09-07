import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

export default function App() {
  let contador = 0;
  const contadorPress = () => {
    contador = contador + 1;
    console.log("botón presionado");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>{contador}</Text>
      <Button onPress={contadorPress} title="sumar"></Button>
      <StatusBar style="auto" />
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
