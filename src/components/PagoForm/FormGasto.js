// FormGasto.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';

const FormGasto = () => {
  const [frecuencyModal, setFrecuencyModal] = useState(false);
  const [typeModal, setTypeModal] = useState(false);
  const [selectedFrecuency, setSelectedFrecuency] = useState('Bimestral');
  const [selectedType, setSelectedType] = useState('Pago Variable');

  const frecuencyOptions = ['Semanal', 'Mensual', 'Bimestral', 'Anual'];
  const typeOptions = ['Pago Fijo', 'Pago Variable', 'Pago Mixto', 'Otro'];
  const handleApply = () => {
    console.log('Datos aplicados:');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        {/* Left Column */}
        <View style={styles.column}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre de pago</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#fff"
              placeholder="Ej: Luz"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Costo</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#fff"
              placeholder="$0.00"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Frecuencia de Pago</Text>
            <TouchableOpacity 
              style={styles.input}
              onPress={() => setFrecuencyModal(true)}
            >
              <Text style={styles.selectText}>{selectedFrecuency}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tipo de Pago</Text>
            <TouchableOpacity 
              style={styles.input}
              onPress={() => setTypeModal(true)}
            >
              <Text style={styles.selectText}>{selectedType}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.column}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Día de pago</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#fff"
              placeholder="DD"
              keyboardType="numeric"
              maxLength={2}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Número de Cuenta</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#fff"
              placeholder="0000-0000-0000-0000"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholderTextColor="#fff"
              placeholder="Agregar descripción"
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyButtonText}>Crear</Text>
          </TouchableOpacity>
        </View>

      {/* Frecuency Modal */}
      <Modal
        visible={frecuencyModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccionar Frecuencia</Text>
            {frecuencyOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.modalOption}
                onPress={() => {
                  setSelectedFrecuency(option);
                  setFrecuencyModal(false);
                }}
              >
                <Text style={styles.modalOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setFrecuencyModal(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Type Modal */}
      <Modal
        visible={typeModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccionar Tipo de Pago</Text>
            {typeOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.modalOption}
                onPress={() => {
                  setSelectedType(option);
                  setTypeModal(false);
                }}
              >
                <Text style={styles.modalOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setTypeModal(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#4B5D67',
    borderRadius: 10,
    padding: 7,
    color: '#000000',
    fontSize: 14,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  selectText: {
    color: '#fff',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
    marginHorizontal: 20,
  },
  applyButton: {
    backgroundColor: '#6200ee',
    padding: 6,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#222',
    padding: 20,
    marginHorizontal:300,
    marginBottom:70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  modalOptionText: {
    color: '#fff',
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#E6A23C',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormGasto;