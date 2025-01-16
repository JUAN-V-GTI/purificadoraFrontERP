import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
  Image
} from 'react-native';
import { 
  Droplets, 
  Truck, 
  Percent, 
  Users, 
  DollarSign,
  Search 
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;

const SalesScreen = () => {
  const navigation = useNavigation();
  // Estados previos...
  const [salesData, setSalesData] = useState([
    { id: 1, cliente: 'Ventanilla', pz: '5 pz', repartidor: 'Beto', vendedor: 'Vero', litros: '35 Lt', total: 200 },
    { id: 2, cliente: 'Ventanilla', pz: '5 pz', repartidor: 'Beto', vendedor: 'Vero', litros: '35 Lt', total: 200 },
    { id: 3, cliente: 'Ventanilla', pz: '5 pz', repartidor: 'Beto', vendedor: 'Vero', litros: '35 Lt', total: 200 },
    { id: 4, cliente: 'Ventanilla', pz: '5 pz', repartidor: 'Beto', vendedor: 'Vero', litros: '35 Lt', total: 200 },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const itemsPerPage = 4;

  // Cálculos...
  const totalLitros = salesData.reduce((sum, item) => sum + parseInt(item.litros), 0);
  const totalRepartidor = salesData.reduce((sum, item) => sum + item.total, 0);
  const totalComision = totalRepartidor * 0.1;
  const totalVendedor = totalRepartidor * 0.05;
  const ventaTotal = salesData.reduce((sum, item) => sum + item.total, 0);

  // Paginación...
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = salesData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(salesData.length / itemsPerPage);

  return (
    <View style={styles.container}>
      {/* Header con título y buscador */}
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
        <Text style={styles.title}>Ventas</Text>
        <View style={styles.searchContainer}>
          <Search color="#fff" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
        </View>
      </View>

      {/* Contenedores de totales */}
      <View style={styles.summaryContainer}>
        <View style={[styles.summaryBox, { backgroundColor: '#4A90E2' }]}>
          <Droplets color="#fff" size={32} />
          <Text style={styles.summaryLabel}>Total Litros</Text>
          <Text style={styles.summaryValue}>{totalLitros} LT</Text>
        </View>
        
        <View style={[styles.summaryBox, { backgroundColor: '#50C878' }]}>
          <Truck color="#fff" size={32} />
          <Text style={styles.summaryLabel}>Repartidor</Text>
          <Text style={styles.summaryValue}>${totalRepartidor}</Text>
        </View>
        
        <View style={[styles.summaryBox, { backgroundColor: '#E6A23C' }]}>
          <Percent color="#fff" size={32} />
          <Text style={styles.summaryLabel}>Comisión</Text>
          <Text style={styles.summaryValue}>${totalComision}</Text>
        </View>
        
        <View style={[styles.summaryBox, { backgroundColor: '#F56C6C' }]}>
          <Users color="#fff" size={32} />
          <Text style={styles.summaryLabel}>Vendedor</Text>
          <Text style={styles.summaryValue}>${totalVendedor}</Text>
        </View>
        
        <View style={[styles.summaryBox, { backgroundColor: '#6200ee' }]}>
          <DollarSign color="#fff" size={32} />
          <Text style={styles.summaryLabel}>Venta Total</Text>
          <Text style={styles.summaryValue}>${ventaTotal}</Text>
        </View>
      </View>

      {/* Resto del componente igual... */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Cliente</Text>
          <Text style={styles.headerText}>Pz</Text>
          <Text style={styles.headerText}>Repartidor</Text>
          <Text style={styles.headerText}>Vendedor</Text>
          <Text style={styles.headerText}>Litros</Text>
          <Text style={styles.headerText}>Total</Text>
        </View>

        <ScrollView>
          {currentItems.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cellText}>{item.cliente}</Text>
              <Text style={styles.cellText}>{item.pz}</Text>
              <Text style={styles.cellText}>{item.repartidor}</Text>
              <Text style={styles.cellText}>{item.vendedor}</Text>
              <Text style={styles.cellText}>{item.litros}</Text>
              <Text style={styles.cellText}>${item.total}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.pagination}>
          <TouchableOpacity 
            style={styles.pageButton}
            onPress={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          >
            <Text style={styles.buttonText}>Anterior</Text>
          </TouchableOpacity>

          <View style={styles.pageNumbers}>
            {[...Array(totalPages)].map((_, index) => (
              <Text
                key={index}
                style={[
                  styles.pageNumber,
                  currentPage === index + 1 && styles.currentPage
                ]}
                onPress={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Text>
            ))}
          </View>

          <TouchableOpacity 
            style={styles.pageButton}
            onPress={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          >
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.closeButtonText}>Cierre</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¿Está seguro que desea cerrar?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.confirmButton]}
                onPress={() => {
                  setModalVisible(false);
                  // Lógica de cierre aquí
                }}
              >
                <Text style={styles.modalButtonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 15,
    paddingBlock:20,
  },
  homeImage: {
    width: 54, // Ajusta el tamaño de la imagen según tus necesidades
    height: 54,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  
  },
  title: {
    marginRight: 300,
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4B5D67',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '50%',
    marginRight: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    padding: 10,
    fontSize: 16,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
    flexWrap: 'wrap',
  },
  summaryBox: {
    width: windowWidth * 0.17,
    aspectRatio: 1,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  summaryLabel: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '600',
  },
  summaryValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  tableContainer: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 15,
    marginTop: 1,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#444',
    paddingBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingVertical: 6,
  },
  cellText: {
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
    paddingTop: 1,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  pageButton: {
    backgroundColor: '#444',
    padding: 1,
    borderRadius: 8,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  pageNumbers: {
    flexDirection: 'row',
  },
  pageNumber: {
    color: '#fff',
    padding: 2,
    marginHorizontal: 5,
    minWidth: 20,
    textAlign: 'center',
  },
  currentPage: {
    backgroundColor: '#6200ee',
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: '#6200ee',
    padding: 6,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginTop: 20,
    width: 100,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#333',
    padding: 25,
    borderRadius: 15,
    width: '80%',
    maxWidth: 400,
  },
  modalText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 25,
    textAlign: 'center',
    fontWeight: '600',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    padding: 12,
    borderRadius: 8,
    width: '45%',
  },
  cancelButton: {
    backgroundColor: '#666',
  },
  confirmButton: {
    backgroundColor: '#6200ee',
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SalesScreen;