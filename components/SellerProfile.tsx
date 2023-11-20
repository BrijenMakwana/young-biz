import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SellerProfileModal from "./SellerProfileModal";
import { useState } from "react";

const SellerProfile = () => {
  const [sellerProfileIsOpen, setSellerProfileIsOpen] = useState(false);

  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => setSellerProfileIsOpen(true)}
      >
        <FontAwesome name="user" size={30} color="black" />

        <View style={styles.userInfo}>
          <Text style={styles.username}>brijen makwana</Text>
          <Text style={styles.email}>@brijenma@gmail.com</Text>
        </View>
      </Pressable>

      <SellerProfileModal
        isOpen={sellerProfileIsOpen}
        onClose={() => setSellerProfileIsOpen(false)}
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
