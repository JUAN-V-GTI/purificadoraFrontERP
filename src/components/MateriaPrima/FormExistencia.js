import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const FormExistencia = () => {
  const [searchText, setSearchText] = useState('');
  
  // Sample data - replace with your actual data source
  const inventoryData = [
    { producto: 'Tapas', pz: '5,000 Pz', costo: '$ 2.20', productoMinimo: '100 Pz', productoMaximo: '5,000 Pz', estado: 'Habilitado' },
    { producto: 'Botellas', pz: '5,000 Pz', costo: '$ 1.50', productoMinimo: '400 Pz', productoMaximo: '5,000 Pz', estado: 'Deshabilitado' },
    { producto: 'Garrafones', pz: '5,000 Pz', costo: '$ 70', productoMinimo: '500 Pz', productoMaximo: '5,000 Pz', estado: 'Habilitado' },
    { producto: 'Cellos', pz: '5,000 Pz', costo: '$ 0.10', productoMinimo: '50 Pz', productoMaximo: '5,000 Pz', estado: 'Habilitado' },
  ];

  return (
    <ScrollView style={styles.container}>
    
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Text style={styles.label}>Producto</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar producto..."
            placeholderTextColor="#fff"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>Producto</Text>
          <Text style={styles.headerCell}>Pz</Text>
          <Text style={styles.headerCell}>Costo</Text>
          <Text style={styles.headerCell}>Producto Mínimo</Text>
          <Text style={styles.headerCell}>Producto Máximo</Text>
          <Text style={styles.headerCell}>Estado</Text>
        </View>

        {inventoryData.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.producto}</Text>
            <Text style={styles.tableCell}>{item.pz}</Text>
            <Text style={styles.tableCell}>{item.costo}</Text>
            <Text style={styles.tableCell}>{item.productoMinimo}</Text>
            <Text style={styles.tableCell}>{item.productoMaximo}</Text>
            <Text style={[
              styles.tableCell,
              item.estado === 'Habilitado' ? styles.enabledStatus : styles.disabledStatus
            ]}>
              {item.estado}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
 
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  searchInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  searchInput: {
    backgroundColor: '#4B5D67',
    borderRadius: 10,
    padding: 7,
    color: '#000000',
  },
  searchButton: {
    backgroundColor: '#6200ee',
    padding: 6,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tableContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#444',
    padding: 12,
  },
  headerCell: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    padding: 12,
  },
  tableCell: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
  },
  enabledStatus: {
    color: '#4CAF50',
  },
  disabledStatus: {
    color: '#f44336',
  },
});

export default FormExistencia;