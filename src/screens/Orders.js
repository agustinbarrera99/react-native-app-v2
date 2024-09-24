import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderItems from '../components/OrderItems'
import { useGetOrdersByUserQuery } from '../services/orders'
import Spinner from '../components/Spinner'
import { useSelector } from 'react-redux'

const Orders = () => {

  const localId = useSelector(state => state.auth.localId)

  const { data: orders, isLoading } = useGetOrdersByUserQuery(localId)

  if (isLoading) return <Spinner />

  if (orders.length === 0) 
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No orders found.</Text>
      </View>
    )

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItems item={item} />}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
  },
})