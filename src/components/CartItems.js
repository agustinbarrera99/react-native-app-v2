import { StyleSheet, Text, View, Pressable } from 'react-native';
import { colores } from '../global/colores';
import Entypo from '@expo/vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import { removeItemCart } from '../features/cart/cartSlice';

const CartItems = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItemCart(item.id)); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>{item.price} $</Text>
      </View>
      <Pressable onPress={handleRemoveItem}>
        <Entypo name="trash" size={32} color={colores.color1} />
      </Pressable>
    </View>
  );
};


export default CartItems

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: colores.color2,
    marginVertical: 10,
    padding: 15, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  containerText: {
    flex: 1, 
    paddingRight: 10, 
  },
  title: {
    color: "white",
    fontSize: 18, 
    fontWeight: "bold",
  },
  brand: {
    color: "white",
    fontSize: 14, 
  },
  price: {
    color: colores.color3,
    fontWeight: "bold",
  }
})
