import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, StatusBar,ImageBackground,useWindowDimensions,Platform } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';

const HomeScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;


  const menuItems = [
    { id: 1, title: 'Gráficos', icon: 'stats-chart', type: 'Ionicons' },
    { id: 2, title: 'Empleados', icon: 'people', type: 'Ionicons', screen: 'Empleado' },
    { id: 3, title: 'Clientes', icon: 'person-add', type: 'Ionicons', screen: 'Cliente' },
    { id: 5, title: 'Pedidos-Clientes', icon: 'basket', type: 'Ionicons'},
    { id: 6, title: 'Pagos', icon: 'desktop', type: 'Ionicons' },
    { id: 7, title: 'Ventas', icon: 'cash', type: 'Ionicons' },
    { id: 8, title: 'Productos', icon: 'cube', type: 'Ionicons' },
    { id: 9, title: 'Mantenimiento', icon: 'build', type: 'Ionicons' },
    { id: 10, title: 'Inventario', icon: 'archive', type: 'Ionicons' },
    { id: 11, title: 'Promociones', icon: 'megaphone', type: 'Ionicons' },
    { id: 12, title: 'Proveedores', icon: 'truck', type: 'FontAwesome5'},
    { id: 13, title: 'Compra Proveedores', icon: 'cart', type: 'Ionicons' },
    { id: 14, title: 'Corte Diario', icon: 'document-text', type: 'Ionicons' },
    { id: 15, title: 'Corte Mensual', icon: 'document', type: 'Ionicons' },
  ];
 
  
  const renderIcon = (item) => {
    const iconSize = isLandscape ? 25 : 30;
    const iconColor = '#b7b0fe';

    switch (item.type) {
      case 'Ionicons':
        return <Ionicons name={item.icon} size={iconSize} color={iconColor} />;
    
      case 'FontAwesome5':
        return <FontAwesome5 name={item.icon} size={iconSize} color={iconColor} />;
      default:
        return <Ionicons name="help-circle" size={iconSize} color={iconColor} />;
    }
  };

  const MenuItem = ({ item }) => {
    const handlePress = () => {
      if (item.screen) {
        navigation.navigate(item.screen); // Navegar directamente usando el nombre de la pantalla
      } else {
        console.log('No screen associated with this menu item');
      }
    };
   
    return (
      <TouchableOpacity
        style={[
          styles.menuItem,
          {
            width: isLandscape ? '18%' : '30%',
            aspectRatio: isLandscape ? 1.2 : 1,
          },
        ]}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        {renderIcon(item)}
        <Text style={[styles.menuText, { fontSize: isLandscape ? 11 : 12 }]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };


  return (
    <ImageBackground 
      source={require('../../assets/fondo2.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton}>
              <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.headerIcon}>
                <Ionicons name="notifications" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIcon}>
                <Ionicons name="settings" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView 
          contentContainerStyle={[
            styles.scrollContent,
            { paddingHorizontal: isLandscape ? 24 : 16 }
          ]}
        >
          <View style={[
            styles.menuGrid,
            { 
              justifyContent: isLandscape ? 'flex-start' : 'space-between',
              gap: isLandscape ? 16 : 8
            }
          ]}>
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  headerContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 20,
  },
  scrollContent: {
    padding: 16,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  menuText: {
    textAlign: 'center',
    color: '#333',
    fontWeight: '500',
  },
});

export default HomeScreen;
