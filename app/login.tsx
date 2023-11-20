import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const loginWithEmailAndPassword = () => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        ToastAndroid.show("Login successfully!", ToastAndroid.SHORT);

        router.replace("/seller");
      })
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>login</Text>

      <View style={styles.loginContainer}>
        <CustomInput
          placeholderText="Email"
          inputMode="email"
          setValue={setEmail}
          value={email}
        />
        <CustomInput
          placeholderText="Password"
          isSecure
          setValue={setPassword}
          value={password}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color="#83A2FF" />
        ) : (
          <CustomButton
            text="login"
            backgroundColor="#83A2FF"
            onPress={loginWithEmailAndPassword}
          />
        )}

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
    paddingHorizontal: 30,
    alignItems: "center",
  },
  newhere: {
    fontFamily: "Neo",
    textTransform: "capitalize",
  },
});
