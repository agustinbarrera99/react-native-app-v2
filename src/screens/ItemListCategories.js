import { FlatList, StyleSheet, View,Text} from 'react-native'
import  { useEffect, useState } from 'react'
import Buscador from '../components/Buscador'
import ProductItems from '../components/ProductItems'
import { useGetProductsQuery } from '../services/shop'
import Spinner from '../components/Spinner'


const ItemListCategories = ({route}) => {


  const {data:products,isSuccess,isLoading,isError,error} = useGetProductsQuery()
  const [productsFiltered,setProductsFiltered] = useState([])


  useEffect(()=>{
    if(isSuccess){
      setProductsFiltered(products)
    }
  },[isSuccess])

  const onSearch = (input) => {

    if(input){
      setProductsFiltered(productsFiltered.filter(product => product.title.includes(input) ))
    }else{
      setProductsFiltered(products)
    }
   
  }

  if(isLoading) return <Spinner />
  if(isError) return <View><Text>{error.message}</Text></View>

  return (
    <View style={styles.container}>
        <Buscador onSearch={onSearch}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item=>item.id}
          renderItem={({item})=> <ProductItems product={item}/>}
        />
    </View>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
})