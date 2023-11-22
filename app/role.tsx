import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const RoleScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={{ width: 300, height: 100 }}
        resizeMode="contain"
      />
      <Text style={styles.heading}>who are you?</Text>

      <View style={styles.btnContainer}>
        <CustomButton
          text="seller"
          backgroundColor="#83A2FF"
          onPress={() => router.push("/login")}
        />
        <CustomButton
          text="buyer"
          backgroundColor="#bafca2"
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
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  heading: {
    fontSize: 30,
    textTransform: "capitalize",
    fontFamily: "Neo",
    marginTop: 100,
  },
  btnContainer: {
    marginTop: 60,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
    gap: 30,
  },
});
