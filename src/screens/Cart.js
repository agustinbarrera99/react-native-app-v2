import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import CartItems from '../components/CartItems';
import { colores } from '../global/colores';
import { useDispatch, useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/orders';
import { clearCart } from '../features/cart/cartSlice';

const Cart = ({ navigation }) => {
  const cart = useSelector(state => state.cart);
  const localId = useSelector(state => state.auth.localId);
  const [triggerPostOrder] = usePostOrderMutation();
  const dispatch = useDispatch();

  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      ...cart,
      createdAt,
    };
    triggerPostOrder({ localId, order });
    dispatch(clearCart());
    navigation.navigate('OrdersStack');
  };

  if (cart.total === 0) return <View style={styles.emptyCart}><Text style={styles.emptyText}>El carrito está vacío</Text></View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CartItems item={item} />}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.containerConfirm}>
        <Pressable onPress={handleAddOrder} style={styles.confirmButton}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </Pressable>
        <Text style={styles.textTotal}>Total: {cart.total} $</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colores.lightGray,
  },
  listContainer: {
    paddingBottom: 20,
  },
  containerConfirm: {
    backgroundColor: colores.color2,
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  confirmButton: {
    backgroundColor: colores.color3,
    padding: 10,
    borderRadius: 5,
  },
  textConfirm: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textTotal: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: colores.color1,
  },
});