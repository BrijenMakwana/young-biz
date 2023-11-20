import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import CustomButton from "../components/CustomButton";

const AddService = () => {
  const [buyingMode, setBuyingMode] = useState("pickup");

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{ flex: 1, backgroundColor: "#fff" }}
      >
        <Text style={styles.heading}>add service</Text>

        <View style={styles.inputs}>
          <CustomInput placeholderText="Title" />
          <CustomInput placeholderText="Description" isMultiline />
          <CustomInput placeholderText="Price" inputMode="numeric" />
          <CustomInput placeholderText="Comma Separated Tags" />

          <RadioButton.Group
            onValueChange={(newValue) => setBuyingMode(newValue)}
            value={buyingMode}
          >
            <View style={styles.buyingMode}>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Pickup</Text>
                <RadioButton value="pickup" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Delivery</Text>
                <RadioButton value="delivery" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Both</Text>
                <RadioButton value="both" />
              </View>
            </View>
          </RadioButton.Group>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          width: "100%",
          alignItems: "center",
          bottom: 20,
          paddingHorizontal: 30,
          zIndex: 10,
        }}
      >
        <CustomButton text="add" backgroundColor="#83A2FF" />
      </View>
    </>
  );
};

export default AddService;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 150,
  },
  heading: {
    fontSize: 30,
    textTransform: "uppercase",
    fontFamily: "Neo",
  },
  inputs: {
    marginTop: 30,
    gap: 30,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  buyingMode: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
  },
  text: {
    fontSize: 12,
    fontFamily: "Neo",
  },
});
