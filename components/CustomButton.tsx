import { Pressable, StyleSheet, Text, View } from "react-native";
import BrutalismShadow from "./BrutalismShadow";

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
      <BrutalismShadow />
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    textTransform: "uppercase",
    fontFamily: "Neo",
  },
});
