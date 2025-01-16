import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const MantenimientoScreen = () => {
  const [aguaCruda, setAguaCruda] = useState([
    { id: 1, hora: '', cloro: '', ph: '', dureza: '' },
    { id: 2, hora: '', cloro: '', ph: '', dureza: '' },
    // Agrega más filas según sea necesario
  ]);

  const [aguaPurificada, setAguaPurificada] = useState([
    { id: 1, hora: '', operador: '' },
    { id: 2, hora: '', operador: '' },
    // Agrega más filas según sea necesario
  ]);

  const updateAguaCruda = (id, field, value) => {
    setAguaCruda((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const updateAguaPurificada = (id, field, value) => {
    setAguaPurificada((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Bitácora de Medición</Text>
        <TextInput placeholder="Nombre del propietario" style={styles.input} />
        <TextInput placeholder="Nombre de la Purificadora" style={styles.input} />
        <TextInput placeholder="Dirección de la Purificadora" style={styles.input} />
        <TextInput placeholder="Periodo" style={styles.input} />
      </View>

      {/* Tabla Agua Cruda */}
      <Text style={styles.sectionTitle}>Agua Cruda</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Hora</Text>
          <Text style={styles.tableHeaderText}>Cloro</Text>
          <Text style={styles.tableHeaderText}>pH</Text>
          <Text style={styles.tableHeaderText}>Dureza</Text>
        </View>
        <FlatList
          data={aguaCruda}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <TextInput
                style={styles.tableCell}
                placeholder="Hora"
                value={item.hora}
                onChangeText={(text) => updateAguaCruda(item.id, 'hora', text)}
              />
              <TextInput
                style={styles.tableCell}
                placeholder="Cloro"
                value={item.cloro}
                onChangeText={(text) => updateAguaCruda(item.id, 'cloro', text)}
              />
              <TextInput
                style={styles.tableCell}
                placeholder="pH"
                value={item.ph}
                onChangeText={(text) => updateAguaCruda(item.id, 'ph', text)}
              />
              <TextInput
                style={styles.tableCell}
                placeholder="Dureza"
                value={item.dureza}
                onChangeText={(text) => updateAguaCruda(item.id, 'dureza', text)}
              />
            </View>
          )}
        />
      </View>

      {/* Tabla Agua Purificada */}
      <Text style={styles.sectionTitle}>Agua Purificada</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Hora</Text>
          <Text style={styles.tableHeaderText}>Operador</Text>
        </View>
        <FlatList
          data={aguaPurificada}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <TextInput
                style={styles.tableCell}
                placeholder="Hora"
                value={item.hora}
                onChangeText={(text) => updateAguaPurificada(item.id, 'hora', text)}
              />
              <TextInput
                style={styles.tableCell}
                placeholder="Operador"
                value={item.operador}
                onChangeText={(text) => updateAguaPurificada(item.id, 'operador', text)}
              />
            </View>
          )}
        />
      </View>

      {/* Botón Guardar */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Guardar Bitácora</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
  tableHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    textAlign: 'center',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MantenimientoScreen;
