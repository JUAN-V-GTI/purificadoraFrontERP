import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, StatusBar,useWindowDimensions,Platform } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';

const HomeScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;


  const menuItems = [
    { id: 1, title: 'Gráficos', icon: 'stats-chart', type: 'Ionicons', screen: 'Graficos', color: '#4B9FE1' },
    { id: 2, title: 'Empleados', icon: 'people', type: 'Ionicons', screen: 'Empleado', color: '#4BD4B6' },
    { id: 3, title: 'Clientes', icon: 'person-add', type: 'Ionicons', screen: 'Cliente', color: '#F7B55E' },
    { id: 5, title: 'Pedidos-Clientes', icon: 'basket', type: 'Ionicons', screen: 'Pedido', color: '#FF6B8A' },
    { id: 6, title: 'Pagos', icon: 'desktop', type: 'Ionicons', screen: 'Pago', color: '#6C5CE7' },
    { id: 7, title: 'Ventas', icon: 'cash', type: 'Ionicons', screen: 'Venta', color: '#4B9FE1' },
    { id: 8, title: 'Productos', icon: 'cube', type: 'Ionicons', color: '#4BD4B6' },
    { id: 9, title: 'Mantenimiento', icon: 'build', type: 'Ionicons', screen: 'Mante', color: '#F7B55E' },
    { id: 10, title: 'Inventario', icon: 'archive', type: 'Ionicons', screen: 'MateriaPrima', color: '#FF6B8A' },
    { id: 11, title: 'Promociones', icon: 'megaphone', type: 'Ionicons', color: '#6C5CE7' },
    { id: 12, title: 'Proveedores', icon: 'truck', type: 'FontAwesome5', color: '#4B9FE1' },
    { id: 13, title: 'Compra Proveedores', icon: 'cart', type: 'Ionicons', color: '#4BD4B6' },
    { id: 14, title: 'Bitacora', icon: 'document-text', type: 'Ionicons',screen: 'Bitacoras', color: '#F7B55E' },
    { id: 15, title: 'Corte Mensual', icon: 'document', type: 'Ionicons', color: '#FF6B8A' },
  ];
  
  const renderIcon = (item) => {
    // Aumentamos el tamaño base de los iconos
    const iconSize = isLandscape ? 35 : 40; // Anteriormente era 25 y 30
    return item.type === 'Ionicons' 
      ? <Ionicons name={item.icon} size={iconSize} color={item.color} />
      : <FontAwesome5 name={item.icon} size={iconSize} color={item.color} />;
  };
  const MenuItem = ({ item }) => {
    const handlePress = () => {
      if (item.screen) {
        navigation.navigate(item.screen);
      }
    };
   
    return (
      <TouchableOpacity
        style={[
          styles.menuItem,
          {
            width: isLandscape ? '22%' : '31%', // Ajustado para acomodar los iconos más grandes
            aspectRatio: 1, // Cambiado a 1 para mantener forma cuadrada
            backgroundColor: '#2D2D2D',
          },
        ]}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
          {renderIcon(item)}
        </View>
        <Text style={styles.menuText}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1B1B1B" />
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="notifications" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="settings" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingHorizontal: isLandscape ? 24 : 16 }
        ]}
      >
        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2D',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#1B1B1B',
  },
  scrollContent: {
    padding: 16,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  menuItem: {
    padding: 20, // Aumentado de 16 a 20 para dar más espacio
    borderRadius: 15,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  iconContainer: {
    padding: 16, // Aumentado de 12 a 16
    borderRadius: 16, // Aumentado de 12 a 16
    marginBottom: 12, // Aumentado de 8 a 12
  },
  menuText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14, // Aumentado de 12 a 14
    fontWeight: '500',
    marginTop: 10, // Aumentado de 8 a 10
  },
});


export default HomeScreen;
