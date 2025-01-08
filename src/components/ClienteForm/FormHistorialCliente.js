import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

const FormHistorialCliente = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [clienteData, setClienteData] = useState({
    nombre: 'Juan Velasco Hernandez',
    calle: 'Mexico lindo',
    numeroTelefonico: '5586838645',
    numero: '255',
    observaciones: 'días lunes y martes',
    problemas: 'garrafón sucio',
  });

  const [problemList, setProblemList] = useState([
    { id: '1', dia: 'Lunes 3/05', cantidad: 5, repartidor: 'Carlos', vendedor: 'Ana' },
    { id: '2', dia: 'Martes 4/05', cantidad: 3, repartidor: 'Juan', vendedor: 'Luis' },
    { id: '3', dia: 'Miércoles 10/05', cantidad: 7, repartidor: 'Pedro', vendedor: 'Sara' },
    { id: '4', dia: 'Jueves 16/05', cantidad: 2, repartidor: 'Luis', vendedor: 'Mario' },
    { id: '5', dia: 'Viernes 23/05', cantidad: 4, repartidor: 'Miguel', vendedor: 'Elena' },
    { id: '6', dia: 'Sábado 31/05', cantidad: 6, repartidor: 'Roberto', vendedor: 'Nora' },
    { id: '7', dia: 'Jueves 11/04', cantidad: 8, repartidor: 'Antonio', vendedor: 'Carmen' },
  ]);

  const totalPages = Math.ceil(problemList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = problemList.slice(startIndex, startIndex + itemsPerPage);

  const handleApply = () => {
    console.log('Datos aplicados:', clienteData);
  };

  const renderProblemItem = ({ item }) => (
    <View style={styles.listItemHorizontal}>
      <Text style={[styles.column, styles.diaColumn]}>{item.dia}</Text>
      <Text style={[styles.column, styles.cantidadColumn]}>{item.cantidad}</Text>
      <Text style={[styles.column, styles.repartidorColumn]}>{item.repartidor}</Text>
      <Text style={[styles.column, styles.vendedorColumn]}>{item.vendedor}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.column}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Cliente</Text>
              <TextInput
                style={styles.input}
                value={clienteData.nombre}
                onChangeText={(text) => setClienteData({ ...clienteData, nombre: text })}
              />
            </View>
            <View style={styles.listContainer}>
              <Text style={styles.listTitle}>Lista de Problemas</Text>
              <View style={styles.listHeader}>
                <Text style={[styles.column, styles.diaColumn]}>Día</Text>
                <Text style={[styles.column, styles.cantidadColumn]}>Cantidad</Text>
                <Text style={[styles.column, styles.repartidorColumn]}>Repartidor</Text>
                <Text style={[styles.column, styles.vendedorColumn]}>Vendedor</Text>
              </View>
              <FlatList
                data={currentItems}
                renderItem={renderProblemItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
              />
              <View style={styles.paginationContainer}>
                <TouchableOpacity
                  style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
                  onPress={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <Text style={styles.pageButtonText}>Anterior</Text>
                </TouchableOpacity>
                <Text style={styles.pageText}>
                  Página {currentPage} de {totalPages}
                </Text>
                <TouchableOpacity
                  style={[styles.pageButton, currentPage === totalPages && styles.disabledButton]}
                  onPress={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
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
  listHeader: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  list: {
    maxHeight: 400,
  },
  listItemHorizontal: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 10,
    alignItems: 'center',
  },
  column: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  diaColumn: {
    flex: 1.5,
    fontWeight: 'bold',
  },
  cantidadColumn: {
    flex: 1,
  },
  repartidorColumn: {
    flex: 1.5,
  },
  vendedorColumn: {
    flex: 1.5,
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

export default FormHistorialCliente;
