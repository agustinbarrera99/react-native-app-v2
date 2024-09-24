import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colores } from '../global/colores'

const SubmitButon = ({onPress, title}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default SubmitButon

const styles = StyleSheet.create({
    button: {
        width: "80%",
        backgroundColor: colores.color2,
        padding: 12,
        alignItems: "center",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
      },
      text: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontWeight: "600",
      },
})