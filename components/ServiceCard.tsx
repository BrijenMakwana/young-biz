import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const ServiceCard = (props) => {
  const { id, title, price, description, tags, forBuyer = false } = props;

  const goToServiceScreen = () => {
    router.push(`/service/${id}`);
  };

  return (
    <Pressable
      style={{
        width: "92%",
        alignSelf: "center",
      }}
      onPress={forBuyer ? goToServiceScreen : undefined}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.image}
        />

        <View style={styles.serviceInfo}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.price}>${price}</Text>
        </View>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.tags}>
          {tags?.map((item: any, index: number) => (
            <Text key={index} style={styles.tag}>
              {item}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.shadow} />
    </Pressable>
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
    top: 4,
    left: 4,
  },
});
