import { View, Text, StyleSheet, FlatList } from "react-native";

const BasketDishItem = ({ basketDish }) => {
  const { name, price } = basketDish || {};

  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "600" }}>{name}</Text>
      <Text style={{ marginLeft: "auto" }}>$ {price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },

  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default BasketDishItem;
