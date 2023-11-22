import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Callout } from "react-native-maps";

const SellerMarkerCard = (props) => {
  const { id, fullName, bio } = props;

  return (
    <Callout onPress={() => router.push(`/seller-info/${id}`)}>
      <View style={styles.container}>
        <Text style={styles.fullName}>{fullName}</Text>

        <Text style={styles.bio}>{bio}</Text>
      </View>
    </Callout>
  );
};

export default SellerMarkerCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    gap: 10,
    alignItems: "center",
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
    width: 200,
  },
});
