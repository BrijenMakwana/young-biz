import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, RefreshControl } from "react-native";
import {
  auth,
  db,
  collection,
  query,
  where,
  getDocs,
} from "../firebase/firebase";
import OrdersCard from "../components/OrderCard";

const Orders = () => {
  const [orders, setOrders] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getOrders = async () => {
    setIsLoading(true);
    const user = auth.currentUser;

    const userID = user?.uid;

    if (userID) {
      const ordersArray: any[] = [];

      try {
        const ordersRef = collection(db, "orders");

        const q = query(ordersRef, where("userID", "==", userID));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          ordersArray.push({ id: doc.id, ...doc.data() });
        });

        setOrders(ordersArray);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>your orders</Text>

      <FlatList
        data={orders}
        renderItem={({ item }) => <OrdersCard {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          gap: 20,
          paddingBottom: 140,
          paddingHorizontal: 15,
          marginTop: 20,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            colors={["#83A2FF"]}
            onRefresh={getOrders}
          />
        }
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  heading: {
    fontSize: 15,
    fontFamily: "Neo",
    textTransform: "uppercase",
    marginLeft: 15,
  },
});
