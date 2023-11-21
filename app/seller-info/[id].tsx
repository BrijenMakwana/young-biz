import { StyleSheet, FlatList, View, RefreshControl, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { db, getDocs, collection, query, where } from "../../firebase/firebase";
import ServiceCard from "../../components/ServiceCard";

const SellerInfo = () => {
  const {
    id,
  }: {
    id: string;
  } = useLocalSearchParams();

  const [services, setServices] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getServices = async () => {
    setIsLoading(true);
    const servicesArray: any[] = [];

    try {
      const servicesRef = collection(db, "services");

      const q = query(servicesRef, where("userID", "==", id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        servicesArray.push({ id: doc.id, ...doc.data() });
      });

      setServices(servicesArray);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This bright kid sells this!</Text>

      <FlatList
        data={services}
        renderItem={({ item }) => <ServiceCard {...item} forBuyer />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          gap: 20,
          paddingBottom: 50,
          paddingHorizontal: 15,
          marginTop: 20,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            colors={["#83A2FF"]}
            onRefresh={getServices}
          />
        }
      />
    </View>
  );
};

export default SellerInfo;

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
