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

export default function Especialidad(nombreEspecialidad) {
  return (
    <SafeAreaView>
      <Text>{nombreEspecialidad}</Text>
    </SafeAreaView>
  );
}
