import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomButton = (props) => {
  const { text, backgroundColor, onPress } = props;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.btn,
          {
            backgroundColor: backgroundColor,
          },
        ]}
      >
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.shadow} />
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "80%",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 7,
  },
  text: {
    fontSize: 24,
    textTransform: "uppercase",
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
