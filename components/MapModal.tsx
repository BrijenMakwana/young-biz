import { StyleSheet, View, Modal } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import CurrentLocationFAB from "./CurrentLocationFAB";

const initialRegion = {
  latitude: 12.9716,
  longitude: 77.5946,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const MapModal = (props) => {
  const { isOpen, onClose } = props;

  const [mapRegion, setMapRegion] = useState(initialRegion);

  const changeMapRegion = (region) => {
    setMapRegion(region);
    console.log(mapRegion);
  };

  return (
    <Modal animationType="slide" visible={isOpen} onRequestClose={onClose}>
      <View style={styles.container}>
        <MapView
          initialRegion={mapRegion}
          provider="google"
          onRegionChange={changeMapRegion}
          style={styles.map}
        >
          <Marker coordinate={mapRegion} />
        </MapView>
      </View>

      <CurrentLocationFAB />
    </Modal>
  );
};

export default MapModal;

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
