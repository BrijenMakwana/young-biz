import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const DisplayLocation = (props) => {
  const { location } = props;

  return (
    <MapView
      initialRegion={{
        ...location,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      provider="google"
      style={styles.map}
    >
      <Marker coordinate={location} pinColor="#83A2FF" />
    </MapView>
  );
};

export default DisplayLocation;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 250,
  },
});
