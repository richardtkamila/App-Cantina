// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ProdutosProvider } from "./Context/ProdutoContext";

import Tela1 from "./screens/tela1";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Drawer from "./screens/drawer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ProdutosProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="tela1" component={Tela1} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="drawer" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProdutosProvider>
  );
}
