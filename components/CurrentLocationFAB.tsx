import { StyleSheet, View, Pressable, ToastAndroid } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

const CurrentLocationFAB = (props) => {
  const { changeMapRegion } = props;

  const calculateDelta = (latitude, longitude) => {
    const defaultVisibleDistanceKm = 0.01; // Adjust as needed

    const oneDegreeOfLatitudeInKm = 111.32; // Approximately 111.32 kilometers or 69.1 miles

    const latitudeDelta = defaultVisibleDistanceKm / oneDegreeOfLatitudeInKm;
    const aspectRatio = 9 / 16; // You can adjust this to match your map container's aspect ratio
    const longitudeDelta = latitudeDelta * aspectRatio;

    return {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: latitudeDelta,
      longitudeDelta: longitudeDelta,
    };
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    try {
      let locationData = await Location.getCurrentPositionAsync({});

      const currentRegion = calculateDelta(
        locationData.coords.latitude,
        locationData.coords.longitude
      );

      changeMapRegion(currentRegion);

      ToastAndroid.show("Current Location is set!", ToastAndroid.SHORT);
    } catch (error) {
      alert("Error getting location");
    }
  };

  return (
    <Pressable style={styles.container} onPress={getCurrentLocation}>
      <View style={styles.btn}>
        <MaterialIcons name="my-location" size={25} color="black" />
      </View>
      <View style={styles.shadow} />
    </Pressable>
  );
};

export default CurrentLocationFAB;

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: 55,
    position: "absolute",
    bottom: 40,
    right: 40,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: "#83A2FF",
  },
  shadow: {
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundColor: "#000",
    position: "absolute",
    top: 3,
    left: 3,
    borderRadius: 100,
  },
});
