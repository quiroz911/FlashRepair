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

export function Especialidad({ route, navigation }) {
  const { nombreEspecialidad } = route.params;
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Contratista")}>
        <Text>{nombreEspecialidad}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
