import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import CustomInput from "./CustomInput";
import { useState } from "react";
import { db, doc, updateDoc, arrayUnion } from "../firebase/firebase";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { FontAwesome } from "@expo/vector-icons";
import BrutalismShadow from "./BrutalismShadow";
import Comment from "./Comment";

const AddCommentBtn = (props) => {
  const { onPress } = props;

  return (
    <Pressable
      style={{
        height: 50,
        width: 50,
      }}
      onPress={onPress}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          width: "100%",
          height: "100%",
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: "#83A2FF",
        }}
      >
        <FontAwesome name="send" size={20} color="#fff" />
      </View>
      <BrutalismShadow />
    </Pressable>
  );
};

const CommentsModal = (props) => {
  const { serviceID, isOpen, onClose, comments, isSeller } = props;

  const [comment, setComment] = useState("");

  const [isCommenting, setIsCommenting] = useState(false);

  const addCommentToService = async () => {
    setIsCommenting(true);

    const docRef = doc(db, "services", serviceID);

    const commentObj = {
      id: nanoid(),
      comment: comment,
      date: new Date().toISOString(),
      isSeller: isSeller,
    };

    try {
      setComment("");

      await updateDoc(docRef, {
        comments: arrayUnion(commentObj),
      });

      console.log("Document successfully updated with comment: ");
    } catch (e) {
      console.log(e);
    } finally {
      setIsCommenting(false);
    }
  };

  return (
    <Modal animationType="slide" visible={isOpen} onRequestClose={onClose}>
      <View style={styles.container}>
        <FlatList
          data={comments}
          renderItem={({ item }) => <Comment {...item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            padding: 15,
          }}
          ListHeaderComponent={<Text style={styles.heading}>Comments</Text>}
        />
      </View>

      <View
        style={{
          gap: 15,
          paddingBottom: 20,
          flexDirection: "row",
          width: "80%",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {isCommenting ? (
          <ActivityIndicator size="large" color="#83A2FF" />
        ) : (
          <>
            <CustomInput
              placeholderText="Add Comment"
              setValue={setComment}
              value={comment}
            />
            <AddCommentBtn onPress={addCommentToService} />
          </>
        )}
      </View>
    </Modal>
  );
};

export default CommentsModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  heading: {
    fontSize: 13,
    textTransform: "uppercase",
    fontFamily: "Neo",
  },
});
