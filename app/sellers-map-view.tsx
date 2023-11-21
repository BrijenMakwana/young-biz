import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { db, getDocs, collection } from "../firebase/firebase";

const initialRegion = {
  latitude: 12.9716,
  longitude: 77.5946,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const SellersMapView = () => {
  const [sellers, setSellers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSellers = async () => {
    setIsLoading(true);

    const sellersArray: any[] = [];

    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        sellersArray.push({ id: doc.id, ...doc.data() });
      });

      setSellers(sellersArray);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSellers();
  }, []);

  if (isLoading)
    return (
      <ActivityIndicator
        size="large"
        color="#83A2FF"
        style={{
          marginTop: 100,
        }}
      />
    );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider="google"
      >
        {sellers?.map((item) => (
          <Marker
            coordinate={item.location}
            key={item.id}
            image={require("../assets/images/kid.png")}
          />
        ))}
      </MapView>
    </View>
  );
};

export default SellersMapView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
