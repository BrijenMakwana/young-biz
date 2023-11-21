import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ToastAndroid,
  Pressable,
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
import { Fontisto } from "@expo/vector-icons";

const initialRegion = {
  latitude: 12.9716,
  longitude: 77.5946,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [mapModalIsOpen, setMapModalIsopen] = useState(false);

  const [mapRegion, setMapRegion] = useState(initialRegion);

  const [isLoading, setIsLoading] = useState(false);

  const addUserToFirestore = async (userID: string) => {
    try {
      await setDoc(doc(db, "users", userID), {
        id: userID,
        fullName,
        email,
        bio,
        phone,
        location: {
          latitude: mapRegion.latitude,
          longitude: mapRegion.longitude,
        },
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
          placeholderText="Guardian Phone Number"
          inputMode="tel"
          setValue={setPhone}
          value={phone.toString()}
        />

        <Pressable
          onPress={() => setMapModalIsopen(true)}
          style={styles.locationBtn}
        >
          <Fontisto name="map" size={20} color="#000" />
          <Text style={styles.location}>add location</Text>
        </Pressable>

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

      <MapModal
        isOpen={mapModalIsOpen}
        onClose={() => setMapModalIsopen(false)}
        mapRegion={mapRegion}
        setMapRegion={setMapRegion}
      />
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
  locationBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  location: {
    fontSize: 15,
    fontFamily: "Neo",
    textTransform: "capitalize",
    color: "#83A2FF",
  },
});
