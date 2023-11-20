import { StyleSheet, Text, Image, View, Linking } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { db, doc, getDoc } from "../../firebase/firebase";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton";

const ServiceScreen = () => {
  const {
    id,
  }: {
    id: string;
  } = useLocalSearchParams();

  const [service, setService] = useState({});
  const [seller, setSeller] = useState({});

  const getService = async () => {
    if (id) {
      const docRef = doc(db, "services", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setService(docSnap.data());
      }
    }
  };

  const getSellerInfo = async () => {
    if (service?.userID) {
      const docRef = doc(db, "users", service?.userID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSeller(docSnap.data());
      }
    }
  };

  const callSeller = () => {
    Linking.openURL(`tel:${seller?.phone}`);
  };

  useEffect(() => {
    getService();
  }, []);

  useEffect(() => {
    getSellerInfo();
  }, [service]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>{service?.title}</Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.image}
      />

      <Text style={styles.price}>${service?.price}</Text>

      <Text style={styles.description}>{service?.description}</Text>

      <View style={styles.tags}>
        {service?.tags?.map((item: any, index: number) => (
          <Text key={index} style={styles.tag}>
            {item}
          </Text>
        ))}
      </View>

      <View
        style={{
          width: "95%",
          alignSelf: "center",
          height: 1,
          backgroundColor: "#666666",
          marginVertical: 10,
        }}
      />

      <Text style={styles.heading}>buy from this amazing kid!</Text>

      <Text style={styles.username}>{seller?.fullName}</Text>

      <Text style={styles.email}>@{seller?.email}</Text>

      <Text style={styles.text}>{seller?.bio}</Text>

      <Text style={styles.text}>Lives at {seller?.address}</Text>

      <CustomButton
        text="call"
        backgroundColor="#83A2FF"
        onPress={callSeller}
      />
    </ScrollView>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 15,
    gap: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 25,
    fontFamily: "Neo",
    textTransform: "capitalize",
  },
  image: {
    width: "100%",
    height: 250,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#000",
  },
  description: {
    fontSize: 15,
  },
  price: {
    fontSize: 23,
    fontFamily: "Neo",
    color: "#83A2FF",
  },
  tags: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  tag: {
    fontSize: 12,
    fontFamily: "Neo",
    backgroundColor: "#bafca2",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 15,
    textTransform: "lowercase",
    borderWidth: 1,
  },
  heading: {
    fontSize: 14,
    fontFamily: "Neo",
    textTransform: "uppercase",
  },
  username: {
    fontSize: 20,
    fontFamily: "Neo",
    textTransform: "uppercase",
    color: "#83A2FF",
  },
  email: {
    fontSize: 12,
    fontFamily: "Neo",
  },
  text: {
    fontSize: 15,
  },
});
