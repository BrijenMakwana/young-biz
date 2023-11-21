import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SellerMarkerCard = (props) => {
  const { fullName, bio } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>{fullName}</Text>

      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
};

export default SellerMarkerCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    gap: 10,
  },
  fullName: {
    fontSize: 17,
    fontFamily: "Neo",
    textTransform: "uppercase",
    color: "#83A2FF",
  },
  bio: {
    fontSize: 13,
    color: "#000",
  },
});
