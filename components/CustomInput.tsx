import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const CustomInput = (props) => {
  const {
    placeholderText,
    isMultiline = false,
    inputMode = "text",
    isSecure = false,
  } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        multiline={isMultiline}
        inputMode={inputMode}
        secureTextEntry={isSecure}
      />

      <View style={styles.shadow} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderWidth: 2,
    borderRadius: 7,
    zIndex: 10,
    fontFamily: "Neo",
  },
  shadow: {
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundColor: "#000",
    position: "absolute",
    bottom: -7,
    left: 7,
    borderRadius: 7,
  },
});
