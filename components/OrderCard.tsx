import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import BrutalismShadow from "./BrutalismShadow";

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
    deliveryTime,
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

        <Text style={styles.address}>{address}</Text>

        <Text style={styles.address}>
          Customer expects the order in {deliveryTime} Days
        </Text>

        <View
          style={{
            width: "95%",
            alignSelf: "center",
            height: 1,
            backgroundColor: "#666666",
            marginVertical: 5,
          }}
        />

        <Text style={styles.order}>
          Order: {quantity} {serviceName}
        </Text>

        <Text style={styles.order}>Total Amount: ${totalAmount}</Text>

        <Text style={styles.date}>Ordered on {moment(date).format("ll")}</Text>
      </View>

      <BrutalismShadow />
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
  address: {
    fontSize: 14,
  },
  date: {
    fontSize: 12,
    fontFamily: "Neo",
    alignSelf: "flex-end",
  },
});
