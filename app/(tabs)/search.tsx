import { StyleSheet, View, FlatList } from "react-native";
import ServiceCard from "../../components/ServiceCard";
import { useState, useEffect } from "react";
import { db, getDocs, collection } from "../../firebase/firebase";
import CustomInput from "../../components/CustomInput";

export default function SearchScreen() {
  const [services, setServices] = useState<any>([]);
  const [search, setSearch] = useState<string>("");

  const getServices = async () => {
    const servicesArray: any[] = [];

    try {
      const querySnapshot = await getDocs(collection(db, "services"));
      querySnapshot.forEach((doc) => {
        servicesArray.push({ id: doc.id, ...doc.data() });
      });

      setServices(servicesArray);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <View style={styles.container}>
      <CustomInput
        placeholderText="What you Want?"
        setValue={setSearch}
        value={search}
      />

      {search && (
        <FlatList
          data={services.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )}
          renderItem={({ item }) => <ServiceCard {...item} forBuyer />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 20,
            paddingBottom: 50,
            marginTop: 20,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 15,
  },
});
