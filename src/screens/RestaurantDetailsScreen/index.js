import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const { image, name, deliveryFee, minDeliveryTime, maxDeliveryTime, dishes } =
    restaurant && restaurant;

  // console.log(dishes);
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          Price: ${deliveryFee} &#8226; Delivery Estimation Time:{" "}
          {minDeliveryTime} to {maxDeliveryTime} minutes
        </Text>
      </View>

      <FlatList
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  container: {
    margin: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
  },
});

export default RestaurantDetailsScreen;
