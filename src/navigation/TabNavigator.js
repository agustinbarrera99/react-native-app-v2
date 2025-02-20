import { StyleSheet } from 'react-native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import { colores } from '../global/colores'
import TabBarrIcon from '../components/TabBarrIcon'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:styles.tabBar
        }}
    >
        <Tab.Screen 
            name='HomeStack' 
            component={ShopStack}
            options={{
                tabBarIcon:({focused}) => {
                    return <TabBarrIcon focused={focused} text="Shop" icon="shop"/>
                }
                
            }}
        />
        <Tab.Screen 
            name='CartStack' 
            component={CartStack}
            options={{
                tabBarIcon:({focused}) => {
                    return <TabBarrIcon focused={focused} text="Carrito" icon="shopping-cart"/>
                }
                
            }}
        />
        <Tab.Screen
            name='OrdersStack' 
            component={OrdersStack}
            options={{
                tabBarIcon:({focused}) => {
                    return <TabBarrIcon focused={focused} text="Ordenes" icon="list"/>
                }
            }}
        />
          <Tab.Screen
            name='ProfileStack' 
            component={ProfileStack}
            options={{
                tabBarIcon:({focused}) => {
                    return <TabBarrIcon focused={focused} text="Perfil" icon="user"/>
                }
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colores.color3,
        height:80
       }
})