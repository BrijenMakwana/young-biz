import { StyleSheet, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CurrentLocationFAB = () => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.btn}>
        <MaterialIcons name="my-location" size={25} color="black" />
      </View>
      <View style={styles.shadow} />
    </Pressable>
  );
};

export default CurrentLocationFAB;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    position: "absolute",
    bottom: 40,
    right: 40,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: "#83A2FF",
  },
  shadow: {
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundColor: "#000",
    position: "absolute",
    top: 3,
    left: 3,
    borderRadius: 100,
  },
});
