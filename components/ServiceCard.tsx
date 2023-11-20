import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ServiceCard = () => {
  return (
    <View
      style={{
        width: "92%",
        alignSelf: "center",
      }}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.image}
        />

        <View style={styles.serviceInfo}>
          <Text style={styles.title}>Cup cake</Text>

          <Text style={styles.price}>$10</Text>
        </View>

        <Text style={styles.description}>
          A sweet single-serving delight, the cupcake is a mini-cake topped with
          luscious frosting, bringing joy with its delightful flavors and
          charming appeal.
        </Text>

        <View style={styles.tags}>
          {["Cupcakes", "Desserts", "Baking", "CupcakeLovers"].map(
            (item, index) => (
              <Text key={index} style={styles.tag}>
                {item}
              </Text>
            )
          )}
        </View>
      </View>

      <View style={styles.shadow} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    zIndex: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#000",
  },
  serviceInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 17,
    fontFamily: "Neo",
    textTransform: "capitalize",
  },
  price: {
    fontSize: 17,
    fontFamily: "Neo",
    color: "#83A2FF",
  },
  description: {
    fontSize: 14,
  },
  tags: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 7,
  },
  tag: {
    fontSize: 11,
    fontFamily: "Neo",
    backgroundColor: "#bafca2",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    textTransform: "lowercase",
    borderWidth: 1,
  },

  shadow: {
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundColor: "#000",
    position: "absolute",
    borderRadius: 10,
    top: 5,
    left: 5,
  },
});
