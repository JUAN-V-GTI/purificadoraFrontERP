import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const FormEditarCliente = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [clienteData, setClienteData] = useState({
    nombre: 'Juan Velasco Hernandez',
    calle: 'Mexico lindo',
    numeroTelefonico: '5586838645',
    numero: '255',
    observaciones: 'dias lunes y martes',
  });

  const handleApply = () => {
    console.log('Datos aplicados:', clienteData);
  };

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
          </View>

          {/* Right Column */}
          <View style={styles.column}>
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
        </View>

                  {/* Buttons */}
                  <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.buttonText}>Guardar</Text>
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
    minHeight: 295,
    maxHeight: 300,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 20,
  },
  editButton: {
    backgroundColor: '#F93827',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#4335A7',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormEditarCliente;