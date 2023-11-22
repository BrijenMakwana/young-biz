import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
} from "react-native";
import CustomInput from "../components/CustomInput";
import { RadioButton } from "react-native-paper";
import { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import {
  auth,
  db,
  collection,
  addDoc,
  doc,
  getDoc,
} from "../firebase/firebase";
import { router } from "expo-router";

const AddService = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [buyingMode, setBuyingMode] = useState("pickup");
  const [serviceImage, setServiceImage] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const [location, setLocation] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const getUserInfo = async () => {
    const user = auth.currentUser;

    const userID = user?.uid;

    if (userID) {
      const docRef = doc(db, "users", userID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLocation(docSnap.data().location);
      }
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const addServiceToFirestore = async () => {
    setIsLoading(true);

    try {
      await addDoc(collection(db, "services"), {
        title: title,
        description: description,
        price: price,
        image: serviceImage,
        tags: tags.split(","),
        buyingMode: buyingMode,
        deliveryTime: deliveryTime,
        userID: auth.currentUser?.uid,
        location: location,
      });

      ToastAndroid.show("Service Added successfully!", ToastAndroid.SHORT);

      router.back();
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{ flex: 1, backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>add service</Text>

        <View style={styles.inputs}>
          <CustomInput
            placeholderText="Title"
            setValue={setTitle}
            value={title}
          />
          <CustomInput
            placeholderText="Description"
            isMultiline
            setValue={setDescription}
            value={description}
          />
          <CustomInput
            placeholderText="Price"
            inputMode="numeric"
            setValue={setPrice}
            value={price.toString()}
          />
          <CustomInput
            placeholderText="Image Url"
            setValue={setServiceImage}
            value={serviceImage}
          />
          <CustomInput
            placeholderText="Comma Separated Tags"
            setValue={setTags}
            value={tags}
          />

          <RadioButton.Group
            onValueChange={(newValue) => setBuyingMode(newValue)}
            value={buyingMode}
          >
            <View style={styles.buyingMode}>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Pickup</Text>
                <RadioButton value="pickup" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Delivery</Text>
                <RadioButton value="delivery" />
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Both</Text>
                <RadioButton value="both" />
              </View>
            </View>
          </RadioButton.Group>

          <CustomInput
            placeholderText="Delivery Time"
            inputMode="numeric"
            setValue={setDeliveryTime}
            value={deliveryTime.toString()}
          />
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          width: "100%",
          alignItems: "center",
          bottom: 20,
          paddingHorizontal: 30,
          zIndex: 10,
        }}
      >
        {isLoading ? (
          <ActivityIndicator size="large" color="#83A2FF" />
        ) : (
          <CustomButton
            text="add"
            backgroundColor="#83A2FF"
            onPress={addServiceToFirestore}
          />
        )}
      </View>
    </>
  );
};

export default AddService;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 150,
  },
  heading: {
    fontSize: 30,
    textTransform: "uppercase",
    fontFamily: "Neo",
  },
  inputs: {
    marginTop: 30,
    gap: 30,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  buyingMode: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
  },
  text: {
    fontSize: 12,
    fontFamily: "Neo",
  },
});
