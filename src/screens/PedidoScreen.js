import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const OrderManagementScreen = () => {
  const navigation = useNavigation();
  // Estados para inputs de búsqueda
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  
  // Precios constantes
  const PRICES = {
    NEUTRA: 25,
    ALCALINA: 45
  };

  // Estado para conteos y tipos de productos
  const [products, setProducts] = useState({
    bonafont: { count: 0, type: 'Neutra' },
    inma: { count: 0, type: 'Neutra' },
    ciel: { count: 0, type: 'Neutra' },
    electro: { count: 0, type: 'Neutra' },
    echizo: { count: 0, type: 'Neutra' },
    chico: { count: 0, type: 'Neutra' }
  });

  // Estado para lista de órdenes
  const [orders, setOrders] = useState([]);

  // Manejador de búsqueda
  const handleSearch = () => {
    setSearchResult(`${street} #${number}`);
  };

  // Manejador de selección de producto
  const handleProductSelect = (product) => {
    setProducts(prev => ({
      ...prev,
      [product]: {
        ...prev[product],
        count: prev[product].count + (isEditMode ? -1 : 1)
      }
    }));
  };

  // Alternar tipo de producto
  const handleTypeToggle = (product) => {
    setProducts(prev => ({
      ...prev,
      [product]: {
        ...prev[product],
        type: prev[product].type === 'Neutra' ? 'Alcalina' : 'Neutra'
      }
    }));
  };

  // Calcular total basado en tipo de producto y cantidad
  const calculateTotal = () => {
    return Object.values(products).reduce((sum, product) => {
      const price = product.type === 'Neutra' ? PRICES.NEUTRA : PRICES.ALCALINA;
      return sum + (product.count * price);
    }, 0);
  };

  // Manejador de aplicar
  const handleApply = () => {
    const totalProducts = Object.values(products).reduce((sum, product) => sum + product.count, 0);
    const totalAmount = calculateTotal();

    const newOrder = {
      street: searchResult,
      products: totalProducts,
      total: totalAmount,
      distributor: 'Juan',
      seller: 'Vero'
    };

    setOrders(prev => [...prev, newOrder]);
    setIsEditMode(false);
  };

  // Alternar modo de edición
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <View style={styles.container}>
       <View style={styles.header}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')}
              style={styles.homeButton}
            >
              <Image 
                source={require('../../assets/iconolab3.webp')} // Ruta de tu imagen local
                style={styles.homeImage}
              />
            </TouchableOpacity>
            <Text style={styles.hText}>Pedidos</Text>
          </View>
      
      {/* Sección de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Calle"
          value={street}
          onChangeText={setStreet}
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Numero"
          value={number}
          onChangeText={setNumber}
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.mainScrollView}>
        {/* Resultado de búsqueda */}
        {searchResult ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{searchResult}</Text>
            
            {/* Indicador de modo */}
            <Text style={[styles.modeIndicator, isEditMode && styles.editModeIndicator]}>
              Modo: {isEditMode ? 'Edición (Restando)' : 'Normal (Sumando)'}
            </Text>
            
            {/* Botones de producto en ScrollView */}
            <ScrollView 
              style={styles.productsScrollView}
              nestedScrollEnabled={true}
            >
              <View style={styles.productGrid}>
                {Object.entries(products).map(([key, value]) => (
                  <View key={key} style={styles.productColumn}>
                    <TouchableOpacity
                      style={[styles.productButton, value.count < 1 && isEditMode && styles.disabledButton]}
                      onPress={() => value.count > 0 || !isEditMode ? handleProductSelect(key) : null}
                    >
                      <Text style={styles.buttonText}>{key.toUpperCase()}</Text>
                    </TouchableOpacity>
                    {value.count > 0 && (
                      <Text style={styles.countText}>{value.count}</Text>
                    )}
                    <TouchableOpacity onPress={() => handleTypeToggle(key)}>
                      <Text style={[
                        styles.typeText,
                        value.type === 'Alcalina' && styles.selectedType
                      ]}>
                        {value.type}
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.priceText}>
                      ${value.type === 'Neutra' ? PRICES.NEUTRA : PRICES.ALCALINA}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[styles.actionButton, styles.editButton]} 
                onPress={toggleEditMode}
              >
                <Text style={styles.buttonText}>{isEditMode ? 'Cancelar Edición' : 'Editar'}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.actionButton, styles.applyButton]} 
                onPress={handleApply}
              >
                <Text style={styles.buttonText}>Aplicar</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
          </View>
        ) : null}

        {/* Lista de órdenes en ScrollView */}
        <ScrollView 
          style={styles.ordersContainer}
          nestedScrollEnabled={true}
        >
          <View style={styles.orderHeader}>
            <Text style={styles.headerText}>Calle</Text>
            <Text style={styles.headerText}>Productos</Text>
            <Text style={styles.headerText}>Total</Text>
            <Text style={styles.headerText}>Repartidor</Text>
            <Text style={styles.headerText}>Vendedor</Text>
          </View>
          {orders.map((order, index) => (
            <View key={index} style={styles.orderRow}>
              <Text style={styles.orderText}>{order.street}</Text>
              <Text style={styles.orderText}>{order.products} pz</Text>
              <Text style={styles.orderText}>${order.total}</Text>
              <Text style={styles.orderText}>{order.distributor}</Text>
              <Text style={styles.orderText}>{order.seller}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 16,
  },
  mainScrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
   
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  homeButton: {
    padding: 1,
  },
  homeImage: {
    width: 54, // Ajusta el tamaño de la imagen según tus necesidades
    height: 54,
    resizeMode: 'contain',
    
  },
  hText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 4,
    color: '#000000',
  },
  searchButton: {
    backgroundColor: '#6200ee',
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  resultContainer: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  resultText: {
    color: '#ffffff',
    marginBottom: 16,
  },
  modeIndicator: {
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#444444',
    borderRadius: 4,
  },
  editModeIndicator: {
    backgroundColor: '#8b0000',
  },
  productsScrollView: {
    maxHeight: 200,
    marginBottom: 16,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productColumn: {
    width: '16%',
    alignItems: 'center',
    marginBottom: 16,
  },
  productButton: {
    backgroundColor: '#333333',
    padding: 8,
    borderRadius: 4,
    width: '100%',
  },
  disabledButton: {
    backgroundColor: '#222222',
    opacity: 0.5,
  },
  countText: {
    color: '#ffffff',
    marginTop: 4,
  },
  typeText: {
    color: '#ffff00',
    marginTop: 4,
  },
  selectedType: {
    color: '#00ffff',
  },
  priceText: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    padding: 12,
    borderRadius: 4,
  },
  editButton: {
    backgroundColor: '#ff9800',
  },
  applyButton: {
    backgroundColor: '#6200ee',
  },
  totalText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'right',
    marginTop: 16,
  },
  ordersContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    maxHeight: 300,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  headerText: {
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  orderText: {
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
  },
});

export default OrderManagementScreen;