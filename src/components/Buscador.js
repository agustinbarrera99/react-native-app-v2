import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { colores } from "../global/colores";
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

const Buscador = ({onSearch}) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (t) => {
    setInput(t);
  };

  const handleRemoveInput = () => {
    setInput("");
    onSearch("");
    setError("");
  };

  const search = () => {
    const regex = /[^a-zA-Z0-9 ]/;
    if (regex.test(input)) {
      setError("Caracteres no validos");
    } else {
      setError("");
      onSearch(input);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#fff"
          placeholder="Buscar producto"
          value={input}
          onChangeText={handleInputChange}
        />
        <View style={styles.buttonContainer}>
          <Pressable onPress={search}>
            <AntDesign name="search1" size={28} color="black" />
          </Pressable>
          <Pressable onPress={handleRemoveInput}>
            <MaterialIcons name="cancel" size={28} color="black" />
          </Pressable>
        </View>
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default Buscador;

const styles = StyleSheet.create({
    container:{
        margin:10,
        marginTop:20
    },
    containerInput:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    input:{
        backgroundColor:colores.color3,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:3,
        width:"75%",
        color:"white"
    },
    buttonContainer:{
        flexDirection:"row"
    },
    error:{
        color:"red",
        fontWeight:"bold",
        marginLeft:20
    }
})