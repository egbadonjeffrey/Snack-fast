import { View, Text, Image, FlatList } from "react-native";
import BasketDishItem from "../../components/BasketDishItem";

import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";

import styles from "./styles";

const { Restaurant: { image, name } = {}, status } = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{status} &#8226; 2 days ago</Text>

          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  const { dishes } = restaurants[0];

  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
