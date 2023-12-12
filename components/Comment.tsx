import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";

const Comment = (props) => {
  const { comment, date, isSeller } = props;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isSeller ? "#83A2FF" : "#fff",
        },
      ]}
    >
      {isSeller && (
        <Image
          source={require("../assets/images/kid.png")}
          style={styles.kidImage}
        />
      )}

      <View style={styles.commentInfo}>
        <Text style={styles.comment}>{comment}</Text>

        <Text style={styles.date}>{moment(date).format("lll")}</Text>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  kidImage: {
    height: 40,
    width: 40,
  },
  commentInfo: {
    flex: 1,
    gap: 10,
  },
  comment: {
    fontSize: 13,
    fontFamily: "Neo",
  },
  date: {
    fontSize: 10,
    fontFamily: "Neo",
    alignSelf: "flex-end",
    color: "#333333",
  },
});
