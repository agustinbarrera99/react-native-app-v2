import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemListCategories from "../screens/ItemListCategories";
import ItemDetail from "../screens/ItemDetail";
import Headerr from "../components/Headerr";

const Stack = createNativeStackNavigator();
const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ItemListCategories} />
      <Stack.Screen name="Detail" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;
