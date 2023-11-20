import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>register</Text>

      <View style={styles.inputs}>
        <CustomInput placeholderText="Full Name" />
        <CustomInput placeholderText="Email" inputMode="email" />
        <CustomInput placeholderText="Password" isSecure />
        <CustomInput placeholderText="Bio" isMultiline />
        <CustomInput placeholderText="Address" isMultiline />
        <CustomInput placeholderText="Guardian Phone Number" inputMode="tel" />

        <CustomButton text="register" backgroundColor="#83A2FF" />
      </View>
    </View>
  );
};

export default Register;

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
  inputs: {
    marginTop: 50,
    gap: 30,
    width: "100%",
    alignItems: "center",
  },
});
