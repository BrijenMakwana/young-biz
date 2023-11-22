import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SellerProfileModal from "./SellerProfileModal";
import { useEffect, useState } from "react";
import { auth, db, getDoc, doc } from "../firebase/firebase";
import { router } from "expo-router";

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
    <View style={styles.leftContainer}>
      <Pressable
        style={styles.container}
        onPress={() => setSellerProfileIsOpen(true)}
        android_ripple={{
          color: "#83A2FF",
        }}
      >
        <Image
          source={require("../assets/images/kid.png")}
          style={styles.image}
        />

        <View style={styles.userInfo}>
          <Text style={styles.username}>{user?.fullName}</Text>
          <Text style={styles.email}>@{user?.email}</Text>
        </View>
      </Pressable>

      <Pressable
        android_ripple={{
          color: "#83A2FF",
        }}
        onPress={() => router.push("/orders")}
      >
        <Image
          source={require("../assets/images/orders.png")}
          style={styles.image}
        />
      </Pressable>

      <SellerProfileModal
        isOpen={sellerProfileIsOpen}
        onClose={() => setSellerProfileIsOpen(false)}
        {...user}
      />
    </View>
  );
};

export default SellerProfile;

const styles = StyleSheet.create({
  leftContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    flex: 1,
  },
  userInfo: {
    flex: 1,
    gap: 3,
  },
  image: {
    height: 45,
    width: 45,
  },
  username: {
    fontSize: 18,
    fontFamily: "Neo",
    textTransform: "uppercase",
    color: "#83A2FF",
  },
  email: {
    fontSize: 11,
    fontFamily: "Neo",
  },
});
