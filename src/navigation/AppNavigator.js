import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import EmpleadoScreen from '../screens/EmpleadoScreen';
import ClienteScreen from '../screens/ClienteScreen';
import PedidoScreen from '../screens/PedidoScreen';
import VentaScreen from '../screens/VentaScreen';
import MateriaPrimaScreen from '../screens/MateriaPrimaScreen';
import PagoScreen from '../screens/PagoScreen';
import GraficosScreen from '../screens/GraficosScreen';
import MantenimientoScreen from '../screens/MantenimientoScreen';
import BitacoraScreen from '../screens/BitacoraScreen';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Empleado" component={EmpleadoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cliente" component={ClienteScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Pedido" component={PedidoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Venta" component={VentaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MateriaPrima" component={MateriaPrimaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Pago" component={PagoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Graficos" component={GraficosScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Mante" component={MantenimientoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Bitacoras" component={BitacoraScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;