import { StyleSheet, View, Modal } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CurrentLocationFAB from "./CurrentLocationFAB";

const MapModal = (props) => {
  const {
    isOpen,
    onClose,
    mapRegion,
    setMapRegion,
    setCurrentLocationIsAdded,
    currentLocationIsAdded,
  } = props;

  const changeMapRegion = (region) => {
    setMapRegion(region);

    if (currentLocationIsAdded) {
      return;
    }

    setCurrentLocationIsAdded(true);
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
          <Marker coordinate={mapRegion} pinColor="#83A2FF" />
        </MapView>
      </View>

      <CurrentLocationFAB changeMapRegion={changeMapRegion} />
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
