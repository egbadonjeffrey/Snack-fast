import { View, Text, FlatList } from "react-native";

import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";

const OrderScreen = () => {
  return (
    <View style={{ flex: 1, width: "100%", paddingTop: 50 }}>
      <Text style={{ fontSize: 25, fontWeight: "700", textAlign: "center" }}>
        Your Orders
      </Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrderScreen;
