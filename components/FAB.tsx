import { Pressable, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import BrutalismShadow from "./BrutalismShadow";

const FAB = () => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push("/add-service")}
    >
      <View style={styles.btn}>
        <Entypo name="plus" size={35} color="#000" />
      </View>

      <BrutalismShadow borderRadius={100} />
    </Pressable>
  );
};

export default FAB;

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: 65,
    position: "absolute",
    bottom: 30,
    right: 30,
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
});
