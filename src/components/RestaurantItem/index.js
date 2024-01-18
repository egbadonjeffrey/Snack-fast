import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

const RestaurantItem = ({ restaurant }) => {
  const { image, name, deliveryFee, minDeliveryTime, maxDeliveryTime, rating } =
    restaurant && restaurant;

  console.log(restaurant);
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            ${deliveryFee} {minDeliveryTime} &#8226; {maxDeliveryTime} minutes
          </Text>
        </View>

        <View style={styles.rating}>
          <Text> {rating} </Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgray",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
