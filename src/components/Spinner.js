import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { colores } from '../global/colores'
const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color="white"/>
    </View>
  )
}

export default Spinner

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colores.color1
    }
})