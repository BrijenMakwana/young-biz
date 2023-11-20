import { ListItem, Button } from "@rneui/themed";
import ServiceCard from "./ServiceCard";

const SellerServiceCard = (props) => {
  const { id, deleteService } = props;

  return (
    <ListItem.Swipeable
      rightContent={
        <Button
          title="Delete"
          onPress={() => deleteService(id)}
          icon={{ name: "delete", color: "#000" }}
          buttonStyle={{
            minHeight: "100%",
            backgroundColor: "#EA1179",
            marginLeft: 15,
            borderRadius: 10,
          }}
          titleStyle={{
            color: "#000",
          }}
        />
      }
      containerStyle={{
        padding: 0,
      }}
    >
      <ServiceCard {...props} />
    </ListItem.Swipeable>
  );
};

export default SellerServiceCard;
