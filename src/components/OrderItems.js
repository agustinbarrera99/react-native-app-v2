import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colores } from "../global/colores";

const OrderItems = ({ item }) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.date}>{item.createdAt}</Text>
        <Text style={styles.total}>Total: {item.total} $</Text>
      </View>
      <Pressable
        style={styles.iconContainer}
      >
        <AntDesign name="search1" size={32} color={colores.color3} />
      </Pressable>
    </View>
  );
};

export default OrderItems;

const styles = StyleSheet.create({
  container: {
    borderColor: colores.color3,
    borderWidth: 2,
    backgroundColor: '#fff',
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    elevation: 3,
  },
  containerText: {
    gap: 10,
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    color: colores.color1,
  },
  iconContainer: {
    padding: 10,
  },
});