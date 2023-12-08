import { StyleSheet, TextInput, View } from "react-native";
import BrutalismShadow from "./BrutalismShadow";

const CustomInput = (props) => {
  const {
    placeholderText,
    isMultiline = false,
    inputMode = "text",
    isSecure = false,
    setValue,
    value,
  } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        multiline={isMultiline}
        inputMode={inputMode}
        secureTextEntry={isSecure}
        onChangeText={(text) => setValue(text)}
        value={value}
      />

      <BrutalismShadow />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    zIndex: 10,
    fontFamily: "Neo",
  },
});
