import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { colores } from './src/global/colores'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { init } from './src/db'

export default function App() {

  
  init()
  

  return (
    <>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
      <StatusBar style="light" backgroundColor={colores.color3} />
    </>
  )
}

const styles = StyleSheet.create({})