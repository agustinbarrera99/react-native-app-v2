import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    useWindowDimensions,
  } from "react-native";
  import { colores } from "../global/colores";
  import { useNavigation } from "@react-navigation/native";
  
  const ProductItems = ({ product }) => {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();
  
    return (
      <Pressable
        style={[
          styles.container,
          { flexDirection: width < 350 ? "column" : "row" },
        ]}
        onPress={() => navigation.navigate("Detail", { id: product.id })}
      >
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: product.photo }}
        />
        <Text style={[styles.title, width < 350 ? styles.titleMin : styles.titleMax]}>
          {product.name}
        </Text>
      </Pressable>
    );
  };
  
  export default ProductItems;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colores.color2,
      marginVertical: 10,
      padding: 10,
      width: "90%",
      marginHorizontal: "5%",
      borderRadius: 8,
      alignItems: "center",
      gap: 10,
    },
    title: {
      color: "#fff",
      textAlign: "center",
    },
    titleMin: {
      fontSize: 16,
      marginTop: 10,
    },
    titleMax: {
      fontSize: 20,
      flex: 1,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
  });
