import { View, Text, Image } from "react-native";
import styles from "./styles";

const RestaurantHeader = ({ restaurant }) => {
  const { image, name, deliveryFee, minDeliveryTime, maxDeliveryTime } =
    restaurant || {};
  return (
    <View style={styles.page}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />

      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          $ {deliveryFee} &#8226; {minDeliveryTime}-{maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
