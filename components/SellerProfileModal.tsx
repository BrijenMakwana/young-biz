import { StyleSheet, Text, View, Modal } from "react-native";

const SellerProfileModal = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal animationType="slide" visible={isOpen} onRequestClose={onClose}>
      <View style={styles.container}>
        <Text style={styles.username}>brijen makwana</Text>
        <Text style={styles.email}>@brijenma@gmail.com</Text>

        <Text style={styles.heading}>Bio</Text>

        <Text style={styles.text}>
          Meet Alex Rodriguez, a 16-year-old tech enthusiast and high school
          student. With a passion for coding and digital art, Alex balances
          academics with skateboard sessions at the local park. Friendly and
          curious, they're navigating adolescence with a smile, dreaming of a
          future in tech innovation. 🌟
        </Text>

        <Text style={styles.heading}>Address</Text>

        <Text style={styles.text}>
          Ann Arbor. 2300 Traverwood Dr. Ann Arbor, MI 48105 United States
        </Text>

        <Text style={styles.heading}>guardian phone number</Text>

        <Text style={styles.text}>3685963789</Text>
      </View>
    </Modal>
  );
};

export default SellerProfileModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#83A2FF",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
  },
  username: {
    fontSize: 30,
    fontFamily: "Neo",
    textTransform: "uppercase",
  },
  email: {
    fontSize: 15,
    fontFamily: "Neo",
    color: "#fff",
    marginTop: 5,
  },
  heading: {
    fontSize: 13,
    fontFamily: "Neo",
    textTransform: "uppercase",
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    marginTop: 10,
  },
});
