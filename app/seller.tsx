import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import SellerProfile from "../components/SellerProfile";
import ServiceCard from "../components/ServiceCard";

const SellerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SellerProfile />

      <ServiceCard />
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
