import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import RoleButton from "../components/RoleButton";

const RoleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>who are you?</Text>

      <View style={styles.btnContainer}>
        <RoleButton text="buyer" backgroundColor="#7df9ff" />
        <RoleButton text="seller" backgroundColor="#bafca2" />
      </View>
    </View>
  );
};

export default RoleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#FAF8ED",
  },
  heading: {
    fontSize: 45,
    textTransform: "capitalize",
  },
  btnContainer: {
    gap: 30,
  },
});
