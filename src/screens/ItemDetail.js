import { Image, Pressable, StyleSheet, Text, View} from 'react-native'
import { colores } from '../global/colores'
import { addItemCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useGetProductQuery } from '../services/shop'
import Spinner from '../components/Spinner'

const ItemDetail = ({route}) => {

  const {id} = route.params
  const {data:product,isLoading} = useGetProductQuery(id)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleAddItemCart = () => {
    dispatch(addItemCart({...product,quantity:1}))
    navigation.navigate("CartStack")
  }

  if(isLoading) return <Spinner />

  return (
    <View style={styles.container}>
      <View style={styles.containerDetail}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{uri:product.photo}}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Precio: {product.price} $</Text>
        </View>
        <Pressable style={styles.button} onPress={handleAddItemCart}>
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container:{
    width:"100%"
  },
  containerDetail:{

  },
  containerText:{
    width:"80%",
    gap:20,
    margin:20,
    marginHorizontal:"10%"
  },
  title:{
    fontSize:20
  },
  description:{
    fontSize:18
  },
  price:{
    fontSize:20,
    fontWeight:'bold'
  },
  image:{
    width:"100%",
    height:250,
    marginVertical:10
  },
  button:{
    width:"80%",
    marginHorizontal:"10%",
    backgroundColor:colores.color3,
    borderRadius:3,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    fontSize:20

  },
  buttonText:{
    color:"white"
  }
})