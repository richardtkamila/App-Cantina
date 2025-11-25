
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Perfil from './perfil';
import Sobre from './sobre';
import Tab from './tab';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {


  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle:  'white',
        headerTintColor: 'black',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'gray',
      }}>
      <Drawer.Screen name="Tab" component={Tab} options={{ title: "Home" }} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Sobre o App" component={Sobre} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});