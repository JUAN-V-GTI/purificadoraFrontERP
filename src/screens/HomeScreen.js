import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar,
  useWindowDimensions,
  Platform 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';

const HomeScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const menuItems = [
    { id: 1, title: 'Gráficos', icon: 'stats-chart', type: 'Ionicons' },
    { id: 2, title: 'Empleados', icon: 'people', type: 'Ionicons', screen: 'EmpleadoScreen'  },
    { id: 3, title: 'Lista Negra', icon: 'desktop', type: 'Ionicons' },
    { id: 4, title: 'Clientes', icon: 'person-add', type: 'Ionicons' },
    { id: 5, title: 'Pedidos-Clientes', icon: 'truck-delivery', type: 'MaterialCommunityIcons' },
    { id: 6, title: 'Pagos', icon: 'desktop', type: 'Ionicons' },
    { id: 7, title: 'Ventas', icon: 'cash', type: 'Ionicons' },
    { id: 8, title: 'Productos', icon: 'cube', type: 'Ionicons' },
    { id: 9, title: 'Mantenimiento', icon: 'build', type: 'Ionicons' },
    { id: 10, title: 'Inventario', icon: 'shelves', type: 'MaterialCommunityIcons' },
    { id: 11, title: 'Promociones', icon: 'megaphone', type: 'Ionicons' },
    { id: 12, title: 'Proveedores', icon: 'truck', type: 'FontAwesome5' },
    { id: 13, title: 'Compra Proveedores', icon: 'cart', type: 'Ionicons' },
    { id: 14, title: 'Corte Diario', icon: 'document-text', type: 'Ionicons' },
    { id: 15, title: 'Corte Mensual', icon: 'document', type: 'Ionicons' },
  ];

  const renderIcon = (item) => {
    const iconSize = isLandscape ? 25 : 30;
    const iconColor = '#D126A1';

    switch (item.type) {
      case 'Ionicons':
        return <Ionicons name={item.icon} size={iconSize} color={iconColor} />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={item.icon} size={iconSize} color={iconColor} />;
      case 'FontAwesome5':
        return <FontAwesome5 name={item.icon} size={iconSize} color={iconColor} />;
      default:
        return <Ionicons name="help-circle" size={iconSize} color={iconColor} />;
    }
  };

  const MenuItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.menuItem,
        {
          width: isLandscape ? '18%' : '30%',
          aspectRatio: isLandscape ? 1.2 : 1,
        }
      ]}
      onPress={() => navigation.navigate(item.title)}>
      <View style={[styles.iconContainer, { 
        width: isLandscape ? 40 : 50,
        height: isLandscape ? 40 : 50,
      }]}>
        {renderIcon(item)}
      </View>
      <Text style={[styles.menuText, {
        fontSize: isLandscape ? 11 : 12
      }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton}>
              <Ionicons name="menu" size={24} color="black" />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEDFFE',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
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
    backgroundColor: 'white',
    borderRadius: 12,
    //opacity: 0.9,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  menuText: {
    textAlign: 'center',
    color: '#333',
  },
});


export default HomeScreen;