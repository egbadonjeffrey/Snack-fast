import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  const { id, Restaurant: { name, image } = {}, status } = order || {};

  return (
    <Pressable
      onPress={() => navigation.navigate("Order", { id })}
      style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
    >
      <Image
        source={{ uri: image }}
        style={{ width: 75, height: 75, marginRight: 5 }}
      />

      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{name}</Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {status} </Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;
