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

export function Especialidad({ route, navigation }) {
  const { nombreEspecialidad } = route.params;
  return (
    <SafeAreaView>
      <Text>{nombreEspecialidad}</Text>
    </SafeAreaView>
  );
}
