import { View, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import restaurants from "../../../assets/data/restaurants.json";
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

const { dishes } = restaurants[0] || {};

const RestaurantDetailsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurants[0]} />}
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsPage;
