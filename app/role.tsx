import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const RoleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>who are you?</Text>

      <View style={styles.btnContainer}>
        <CustomButton
          text="seller"
          backgroundColor="#83A2FF"
          onPress={() => router.push("/login")}
        />
        <CustomButton
          text="explorer"
          backgroundColor="#83A2FF"
          onPress={() => router.push("/(tabs)")}
        />
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
    paddingHorizontal: 30,
    gap: 30,
  },
});
