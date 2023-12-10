import { StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";

const Comment = (props) => {
  const { comment, date } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.comment}>{comment}</Text>

      <Text style={styles.date}>{moment(date).format("lll")}</Text>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
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
  },
});
