import {
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { db, addDoc, collection } from "../firebase/firebase";

const PlaceOrderModal = (props) => {
  const { isOpen, onClose, userID, serviceName, servicePrice, deliveryTime } =
    props;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("1");

  const [isLoading, setIsLoading] = useState(false);

  const placeOrder = async () => {
    setIsLoading(true);

    try {
      await addDoc(collection(db, "orders"), {
        fullName,
        email,
        phone,
        address,
        serviceName,
        quantity,
        userID,
        totalAmount: Number(quantity) * servicePrice,
        date: new Date(),
        deliveryTime,
      });

      ToastAndroid.show("Order placed successfully!", ToastAndroid.LONG);
      onClose();
    } catch (e) {
      alert("try Again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal animationType="slide" visible={isOpen} onRequestClose={onClose}>
      <>
        <ScrollView
          contentContainerStyle={styles.container}
          style={{ flex: 1, backgroundColor: "#fff" }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>order</Text>

          <View style={styles.inputs}>
            <CustomInput
              placeholderText="Full Name"
              setValue={setFullName}
              value={fullName}
            />
            <CustomInput
              placeholderText="Email"
              inputMode="email"
              setValue={setEmail}
              value={email}
            />
            <CustomInput
              placeholderText="Phone Number"
              inputMode="tel"
              setValue={setPhone}
              value={phone.toString()}
            />
            <CustomInput
              placeholderText="Address"
              setValue={setAddress}
              value={address}
            />
            <CustomInput
              placeholderText="Quantity"
              inputMode="numeric"
              setValue={setQuantity}
              value={quantity.toString()}
            />

            <Text style={styles.totalAmount}>
              payble amount: ${Number(quantity) * servicePrice}
            </Text>
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
          {isLoading ? (
            <ActivityIndicator size="large" color="#83A2FF" />
          ) : (
            <CustomButton
              text="place order"
              backgroundColor="#83A2FF"
              onPress={placeOrder}
            />
          )}
        </View>
      </>
    </Modal>
  );
};

export default PlaceOrderModal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 150,
  },
  heading: {
    fontSize: 40,
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
  totalAmount: {
    fontSize: 15,
    fontFamily: "Neo",
    alignSelf: "flex-start",
    textTransform: "uppercase",
  },
});
