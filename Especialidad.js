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

export function Especialidad({ route, navigation }) {
  const { nombreEspecialidad } = route.params;
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <Text style={{ fontSize: 32, marginVertical: 15 }}>
        {nombreEspecialidad}
      </Text>
      <Image
        style={{
          width: "75%",
          height: "33%",
          resizeMode: "stretch",
          marginVertical: 20,
        }}
        source={{
          uri: "https://elcomercio.pe/resizer/vmeQ_oLIRc57kVgxTHVit4M0zhk=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DKKNSRIX4ZHWJGC62ZS3GBVKNY.jpg",
        }}
      ></Image>
      <TouchableOpacity
        style={{
          backgroundColor: "#E9E9E9",
          width: "80%",
          height: "10%",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
        onPress={() => navigation.navigate("Contratista")}
      >
        <Image
          style={{ width: "15%", height: "75%", borderRadius: 12 }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Johnny_Depp_%28July_2009%29_2.jpg/200px-Johnny_Depp_%28July_2009%29_2.jpg",
          }}
        />
        <Text style={{ fontSize: 25 }}>Mauro</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
