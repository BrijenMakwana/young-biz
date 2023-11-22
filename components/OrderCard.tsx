import { StyleSheet, Text, View } from "react-native";

const OrdersCard = (props) => {
  const {
    fullName,
    serviceName,
    quantity,
    email,
    phone,
    address,
    totalAmount,
    date,
  } = props;

  return (
    <View
      style={{
        width: "100%",
        alignSelf: "center",
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Customer: {fullName}</Text>
        <Text style={styles.text}>Email: {email}</Text>
        <Text style={styles.text}>Phone: {phone}</Text>
        <Text style={styles.text}>Address:</Text>

        <Text style={styles.description}>{address}</Text>

        <Text style={styles.order}>
          Order: {quantity} {serviceName}
        </Text>

        <Text style={styles.order}>Total Amount: ${totalAmount}</Text>
      </View>

      <View style={styles.shadow} />
    </View>
  );
};

export default OrdersCard;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    zIndex: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 17,
    fontFamily: "Neo",
    textTransform: "capitalize",
  },
  text: {
    fontSize: 13,
    fontFamily: "Neo",
  },
  order: {
    fontSize: 15,
    fontFamily: "Neo",
    color: "#83A2FF",
  },
  description: {
    fontSize: 14,
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
