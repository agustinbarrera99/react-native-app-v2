import { StyleSheet, Text, View,Pressable } from 'react-native'
import { colores } from '../global/colores'
import { useEffect, useState } from 'react'
import SubmitButon from '../components/SubmitButon'
import { useLoginMutation } from '../services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { loginSchema } from '../validations/loginSchema'
import InputFormulario from '../components/InputFormulario'
import { insertSession } from '../db'


const Login = ({navigation}) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [triggerLogin,{data,isSuccess,isError,error}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(()=>{
      if(isError) {
        setErrorEmail("email o contraseña invalida")
        setErrorPassword("email o contraseña invalida")
      }
    },[isError])


    const onSubmit = async () => {
        try {
          loginSchema.validateSync({email,password})
          const {data} = await triggerLogin({email,password})
          insertSession(data)
          dispatch(setUser({
            email:data.email,
            idToken:data.idToken,
            localId:data.localId
          }))
        } catch (error) {
          (error)
          switch(error.path){
            case "email":
              setErrorEmail(error.message)
              setErrorPassword("")
              break
            case "password":
              setErrorPassword(error.message)
              setErrorEmail("")
              break
              default:
                break
          }
     
        }
    }

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <InputFormulario
                label="Email"
                value={email}
                onChangeText={(t) => setEmail(t)}
                isSecure={false}
                error={errorEmail}
            />
            <InputFormulario
                label="Password"
                value={password}
                onChangeText={(t) => setPassword(t)}
                isSecure={true}
                error={errorPassword}
            />
            <SubmitButon onPress={onSubmit} title="Iniciar Sesion"/>
            <Text style={styles.sub}>No tenes una cuenta?</Text>
            <Pressable onPress={()=> navigation.navigate("Register")} >
                <Text style={styles.subLink}>Registro</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colores.lightGray,
  },
  container: {
    width: "90%",
    backgroundColor: colores.color1,
    gap: 20,
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: "Lobster",
    color: colores.color2,
  },
  sub: {
    fontSize: 16,
    color: "#333",  
  },
  subLink: {
    fontSize: 16,
    color: colores.accent, 
    textDecorationLine: "underline",
  },
});