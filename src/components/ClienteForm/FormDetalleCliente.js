import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

const FormDetalleCliente = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [clienteData, setClienteData] = useState({
    nombre: 'Juan Velasco Hernandez',
    calle: 'Mexico lindo',
    numeroTelefonico: '5586838645',
    numero: '255',
    observaciones: 'dias lunes y martes',
    problemas: 'garrafon sucio',
  });

  // Sample problem list data - you can replace this with your actual data
  const [problemList, setProblemList] = useState([
    { id: '1', problema: 'Garrafón sucio', fecha: '2025-01-01', repartidor: 'Carlos' },
    { id: '2', problema: 'Entrega tardía', fecha: '2025-01-02', repartidor: 'Juan' },
    { id: '3', problema: 'Producto dañado', fecha: '2025-01-03', repartidor: 'Pedro' },
    { id: '4', problema: 'Dirección incorrecta', fecha: '2025-01-04', repartidor: 'Luis' },
    { id: '5', problema: 'Cliente ausente', fecha: '2025-01-05', repartidor: 'Miguel' },
    { id: '6', problema: 'Pago pendiente', fecha: '2025-01-06', repartidor: 'Roberto' },
    { id: '7', problema: 'Reclamación', fecha: '2025-01-07', repartidor: 'Antonio' },
  ]);

  const totalPages = Math.ceil(problemList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = problemList.slice(startIndex, startIndex + itemsPerPage);

  const handleApply = () => {
    console.log('Datos aplicados:', clienteData);
  };

  const renderProblemItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.problemText}>Problema: {item.problema}</Text>
      <Text style={styles.dateText}>Fecha: {item.fecha}</Text>
      <Text style={styles.repartidorText}>Repartidor: {item.repartidor}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {/* Left Column */}
          <View style={styles.column}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput
                style={styles.input}
                value={clienteData.nombre}
                onChangeText={(text) => setClienteData({...clienteData, nombre: text})}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>calle</Text>
              <TextInput
                style={styles.input}
                value={clienteData.calle}
                onChangeText={(text) => setClienteData({...clienteData, calle: text})}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>numero</Text>
              <TextInput
                style={styles.input}
                value={clienteData.numero}
                onChangeText={(text) => setClienteData({...clienteData, numero: text})}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>numero Telefonico</Text>
              <TextInput
                style={styles.input}
                value={clienteData.numeroTelefonico}
                onChangeText={(text) => setClienteData({...clienteData, numeroTelefonico: text})}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Observaciones</Text>
              <View style={styles.obsContainer}>
                <TextInput
                  style={[styles.input, styles.obsInput]}
                  value={clienteData.observaciones}
                  onChangeText={(text) => setClienteData({...clienteData, observaciones: text})}
                  multiline={true}
                  numberOfLines={4}
                  textAlignVertical="top"
                />
              </View>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.column}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>problemas</Text>
              <TextInput
                style={styles.input}
                value={clienteData.problemas}
                onChangeText={(text) => setClienteData({...clienteData, problemas: text})}
              />
            </View>
            <View style={styles.listContainer}>
              <Text style={styles.listTitle}>Lista</Text>
              <FlatList
                data={currentItems}
                renderItem={renderProblemItem}
                keyExtractor={item => item.id}
                style={styles.list}
              />
              <View style={styles.paginationContainer}>
                <TouchableOpacity 
                  style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
                  onPress={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <Text style={styles.pageButtonText}>Anterior</Text>
                </TouchableOpacity>
                <Text style={styles.pageText}>Página {currentPage} de {totalPages}</Text>
                <TouchableOpacity 
                  style={[styles.pageButton, currentPage === totalPages && styles.disabledButton]}
                  onPress={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  <Text style={styles.pageButtonText}>Siguiente</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyButtonText}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  formContainer: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    fontStyle: 'italic',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  obsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  obsInput: {
    flex: 1,
    minHeight: 100,
    maxHeight: 200,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  applyButton: {
    backgroundColor: '#4335A7',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#4335A7',
  },
  list: {
    maxHeight: 400,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 10,
  },
  problemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  repartidorText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  pageButton: {
    backgroundColor: '#4335A7',
    padding: 8,
    borderRadius: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  pageButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  pageText: {
    fontSize: 14,
    color: '#666',
  },
});

export default FormDetalleCliente;