import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center" }}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Stack")}
        style={{
          backgroundColor: "purple",
          padding: 10,
          marginTop: "20%",
          width: "50%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "white",
          }}
        >
          Go to Stack Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
