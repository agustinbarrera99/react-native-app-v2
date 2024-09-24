import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colores } from '../global/colores'

const InputFormulario = ({label,value,onChangeText,isSecure,error}) => {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput  
            value={value}  
            onChangeText={onChangeText} 
            style={styles.input}
            secureTextEntry={isSecure}
        />
        <View><Text style={styles.error}>{error ? error : ""} </Text></View>
    </View>
  )
}

export default InputFormulario

const styles = StyleSheet.create({
    inputContainer: {
      width: "100%",
      marginVertical: 10,
    },
    input: {
      width: "100%",
      borderBottomWidth: 2,
      borderBottomColor: colores.color2,
      paddingVertical: 8,
      fontSize: 16,
    },
    titleInput: {
      fontSize: 18,
      color: colores.color2,
    },
    error: {
      fontSize: 14,
      color: "red",
      marginTop: 5,
    },
  })