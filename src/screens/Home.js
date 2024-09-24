import { StyleSheet,View} from 'react-native'
import ItemListCategories from './ItemListCategories'

const Home = () => {
  return (
    <View style={styles.container}>
      <ItemListCategories />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
})