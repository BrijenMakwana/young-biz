import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";

const RoleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>who are you?</Text>

      <View style={styles.btnContainer}>
        <CustomButton text="seller" backgroundColor="#ff7a5c" />
        <CustomButton text="buyer" backgroundColor="#bafca2" />
      </View>
    </View>
  );
};

export default RoleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 30,
    textTransform: "capitalize",
    fontFamily: "Neo",
  },
  btnContainer: {
    marginTop: 60,
    width: "100%",
    alignItems: "center",
    gap: 30,
  },
});
