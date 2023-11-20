import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SellerProfileModal from "./SellerProfileModal";
import { useEffect, useState } from "react";
import { auth, db, getDoc, doc } from "../firebase/firebase";

const SellerProfile = () => {
  const [user, setUser] = useState({});

  const [sellerProfileIsOpen, setSellerProfileIsOpen] = useState(false);

  const getUserInfo = async () => {
    const user = auth.currentUser;

    const userID = user?.uid;

    if (userID) {
      const docRef = doc(db, "users", userID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
      }
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => setSellerProfileIsOpen(true)}
      >
        <FontAwesome name="user" size={30} color="black" />

        <View style={styles.userInfo}>
          <Text style={styles.username}>{user?.fullName}</Text>
          <Text style={styles.email}>@{user?.email}</Text>
        </View>
      </Pressable>

      <SellerProfileModal
        isOpen={sellerProfileIsOpen}
        onClose={() => setSellerProfileIsOpen(false)}
        {...user}
      />
    </>
  );
};

export default SellerProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#83A2FF",
    width: "92%",
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    borderWidth: 2,
    borderColor: "#000",
  },
  userInfo: {
    flex: 1,
    gap: 3,
  },
  username: {
    fontSize: 17,
    fontFamily: "Neo",
    textTransform: "uppercase",
  },
  email: {
    fontSize: 11,
    fontFamily: "Neo",
    color: "#fff",
  },
});
