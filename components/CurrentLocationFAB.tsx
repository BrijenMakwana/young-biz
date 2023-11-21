import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CurrentLocationFAB = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="my-location" size={25} color="black" />
    </View>
  );
};

export default CurrentLocationFAB;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    padding: 10,
    backgroundColor: "#83A2FF",
    borderRadius: 30,
    bottom: 90,
    right: 25,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: 10,
  },
});
