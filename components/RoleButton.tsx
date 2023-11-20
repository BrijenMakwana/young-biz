import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const RoleButton = (props) => {
  const { text, backgroundColor } = props;

  return (
    <Pressable style={styles.container}>
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

export default RoleButton;

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: 250,
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
    fontWeight: "600",
  },
  shadow: {
    width: "100%",
    height: 60,
    zIndex: 0,
    backgroundColor: "#000",
    position: "absolute",
    bottom: -7,
    left: 7,
    borderRadius: 7,
  },
});
