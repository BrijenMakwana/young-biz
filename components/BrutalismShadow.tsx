import { StyleSheet, View } from "react-native";

const BrutalismShadow = (props) => {
  const { borderRadius = 10 } = props;

  return (
    <View
      style={[
        styles.shadow,
        {
          borderRadius: borderRadius,
        },
      ]}
    />
  );
};

export default BrutalismShadow;

const styles = StyleSheet.create({
  shadow: {
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundColor: "#000",
    position: "absolute",
    top: 4,
    left: 4,
  },
});
