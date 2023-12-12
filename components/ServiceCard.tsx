import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import BrutalismShadow from "./BrutalismShadow";
import { FontAwesome } from "@expo/vector-icons";
import CommentsModal from "./CommentsModal";

const ServiceCard = (props) => {
  const {
    id,
    title,
    price,
    description,
    image,
    tags,
    forBuyer = false,
    comments,
  } = props;

  const [commentModalIsOpen, setCommentModalIsOpen] = useState(false);

  const goToServiceScreen = () => {
    router.push(`/service/${id}`);
  };

  return (
    <Pressable
      style={{
        width: "100%",
        alignSelf: "center",
      }}
      onPress={forBuyer ? goToServiceScreen : undefined}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: image,
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

        <Pressable
          style={styles.addComment}
          onPress={() => setCommentModalIsOpen(true)}
        >
          <FontAwesome name="comment" size={18} color="#83A2FF" />
          <Text style={styles.commentText}>comments</Text>
        </Pressable>
      </View>

      <BrutalismShadow />

      <CommentsModal
        isOpen={commentModalIsOpen}
        onClose={() => setCommentModalIsOpen(false)}
        serviceID={id}
        comments={comments}
      />
    </Pressable>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    gap: 15,
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
    gap: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: "Neo",
    textTransform: "capitalize",
    flex: 1,
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
  addComment: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    alignSelf: "flex-end",
  },
  commentText: {
    fontSize: 12,
    textTransform: "capitalize",
    fontFamily: "Neo",
  },
});
