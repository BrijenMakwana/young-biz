import {
  StyleSheet,
  Text,
  View,
  Modal,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import CustomButton from "./CustomButton";
import { auth, signOut } from "../firebase/firebase";
import { router } from "expo-router";
import { useState } from "react";

const SellerProfileModal = (props) => {
  const { isOpen, onClose, fullName, email, bio, address, phone } = props;

  const [isLoading, setIsLoading] = useState(false);

  const logout = () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        router.replace("/role");
        ToastAndroid.show("Logout successfully!", ToastAndroid.SHORT);
      })
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
        setIsLoading(true);
      });
  };

  return (
    <Modal animationType="slide" visible={isOpen} onRequestClose={onClose}>
      <View style={styles.container}>
        <Text style={styles.username}>{fullName}</Text>
        <Text style={styles.email}>@{email}</Text>

        <Text style={styles.heading}>Bio</Text>

        <Text style={styles.text}>{bio}</Text>

        <Text style={styles.heading}>Address</Text>

        <Text style={styles.text}>{address}</Text>

        <Text style={styles.heading}>guardian phone number</Text>

        <Text style={styles.text}>{phone}</Text>

        <View
          style={{
            paddingHorizontal: 30,
            marginTop: "auto",
            marginBottom: 20,
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color="#83A2FF" />
          ) : (
            <CustomButton
              text="logout"
              backgroundColor="#EA1179"
              onPress={logout}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default SellerProfileModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#83A2FF",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
  },
  username: {
    fontSize: 30,
    fontFamily: "Neo",
    textTransform: "uppercase",
  },
  email: {
    fontSize: 15,
    fontFamily: "Neo",
    color: "#fff",
    marginTop: 5,
  },
  heading: {
    fontSize: 13,
    fontFamily: "Neo",
    textTransform: "uppercase",
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    marginTop: 10,
  },
});
