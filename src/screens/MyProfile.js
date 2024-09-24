import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import SubmitButon from '../components/SubmitButon'
import { useGetUserQuery } from '../services/users'
import { useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import { deleteSession } from '../db'
import { useDispatch } from 'react-redux'

const MyProfile = ({navigation}) => {
    const dispatch = useDispatch()
    const onLogout = () =>{
      deleteSession()
      dispatch(clearUser())
    }
  const localId = useSelector(state => state.auth.localId)
  const {data:user,isSuccess,isLoading,isError,error} = useGetUserQuery({localId})

  if(isLoading) return <Spinner />
  return (
    <View style={styles.container}>
      <Image
        source={user.image ? 
                {uri:user.image}
                :
                require("../../assets/profile_default.png")}
        resizeMode='cover'
        style={styles.image}
      />
      <SubmitButon title="Agregar imagen de perfil" onPress={()=>navigation.navigate("ImageSelector")}/>
        <SubmitButon title="Cerrar cesion" onPress={() => onLogout}/>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container:{
        marginTop:70,
        alignItems:"center",
        gap:20
    },
    image:{
        width:150,
        height:150
    }
})