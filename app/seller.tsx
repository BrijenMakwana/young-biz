import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import SellerProfile from "../components/SellerProfile";

const SellerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SellerProfile />
    </SafeAreaView>
  );
};

export default SellerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});
