import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>login</Text>

      <View style={styles.loginContainer}>
        <CustomInput />
        <CustomInput />

        <CustomButton text="login" backgroundColor="#ff7a5c" />

        <Text style={styles.newhere}>
          New here?{" "}
          <Text
            style={{
              color: "#ff7a5c",
              textDecorationLine: "underline",
            }}
            onPress={() => router.push("/register")}
          >
            Register!
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 40,
    textTransform: "uppercase",
    color: "#ff7a5c",
    fontFamily: "Neo",
  },
  loginContainer: {
    marginTop: 70,
    gap: 30,
    width: "100%",
    alignItems: "center",
  },
  newhere: {
    fontFamily: "Neo",
    textTransform: "capitalize",
  },
});
