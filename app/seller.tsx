import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  RefreshControl,
  ToastAndroid,
} from "react-native";
import { useEffect, useState } from "react";
import SellerProfile from "../components/SellerProfile";
import FAB from "../components/FAB";
import {
  auth,
  db,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "../firebase/firebase";
import SellerServiceCard from "../components/SellerServiceCard";

const SellerScreen = () => {
  const [services, setServices] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [userID, setUserID] = useState<string | undefined>("");

  const getServices = async () => {
    setIsLoading(true);
    const servicesArray: any[] = [];

    try {
      const querySnapshot = await getDocs(collection(db, "services"));
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

  const deleteService = async (id: string) => {
    try {
      await deleteDoc(doc(db, "services", id));

      ToastAndroid.show("Deleted!", ToastAndroid.SHORT);

      getServices();
    } catch (error) {
      ToastAndroid.show("Try Again!", ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    setUserID(auth.currentUser?.uid);
    getServices();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <SellerProfile />

        <FlatList
          data={services.filter((item: any) => item.userID === userID)}
          renderItem={({ item }) => (
            <SellerServiceCard {...item} deleteService={deleteService} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 20,
            paddingBottom: 120,
            paddingHorizontal: 15,
          }}
          style={{
            marginTop: 15,
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
      </SafeAreaView>

      <FAB />
    </>
  );
};

export default SellerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});
