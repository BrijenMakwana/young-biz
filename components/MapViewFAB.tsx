import { Pressable, StyleSheet, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";

import { router } from "expo-router";

const MapViewFAB = () => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push("/service-map-view")}
    >
      <View style={styles.btn}>
        <Fontisto name="map" size={25} color="#000" />
      </View>
      <View style={styles.shadow} />
    </Pressable>
  );
};

export default MapViewFAB;

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
