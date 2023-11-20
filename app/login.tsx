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
        <CustomInput placeholderText="Email" />
        <CustomInput placeholderText="Password" isSecure />

        <CustomButton
          text="login"
          backgroundColor="#83A2FF"
          onPress={() => router.push("/seller")}
        />

        <Text style={styles.newhere}>
          New here?{" "}
          <Text
            style={{
              color: "#83A2FF",
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
    fontFamily: "Neo",
  },
  loginContainer: {
    marginTop: 50,
    gap: 30,
    width: "100%",
    alignItems: "center",
  },
  newhere: {
    fontFamily: "Neo",
    textTransform: "capitalize",
  },
});
