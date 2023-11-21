import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import {
  auth,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
  db,
} from "../firebase/firebase";
import { useState } from "react";
import { router } from "expo-router";
import MapModal from "../components/MapModal";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [mapModalIsOpen, setMapModalIsopen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const addUserToFirestore = async (userID: string) => {
    try {
      await setDoc(doc(db, "users", userID), {
        id: userID,
        fullName,
        email,
        bio,
        address,
        phone,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const registerWithEmailAndPassword = () => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        addUserToFirestore(user.uid);

        setIsLoading(false);

        router.back();

        ToastAndroid.show("Registered successfully!", ToastAndroid.SHORT);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>register</Text>

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
          placeholderText="Password"
          isSecure
          setValue={setPassword}
          value={password}
        />
        <CustomInput
          placeholderText="Bio"
          isMultiline
          setValue={setBio}
          value={bio}
        />
        <CustomInput
          placeholderText="Address"
          isMultiline
          setValue={setAddress}
          value={address}
        />
        <CustomInput
          placeholderText="Guardian Phone Number"
          inputMode="tel"
          setValue={setPhone}
          value={phone.toString()}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color="#83A2FF" />
        ) : (
          <CustomButton
            text="register"
            backgroundColor="#83A2FF"
            onPress={registerWithEmailAndPassword}
          />
        )}
      </View>

      <MapModal isOpen={true} onClose={() => setMapModalIsopen(false)} />
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
    paddingHorizontal: 30,
  },
});
