import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Modal,
  FlatList 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FormRoll = ({ employeeData, setEmployeeData }) => {
  const [isRollModalVisible, setRollModalVisible] = useState(false);
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const [isStatusModalVisible, setStatusModalVisible] = useState(false);
  const [selectedRoll, setSelectedRoll] = useState('Vendedor');
  const [selectedPayment, setSelectedPayment] = useState('Diario');
  const [selectedStatus, setSelectedStatus] = useState('Deshabilitado');

  const rollTypes = [
    { label: 'Seleccionar tipo de roll', value: '', isHeader: true },
    { label: 'Vendedor', value: 'Vendedor' },
    { label: 'Administrador', value: 'Administrador' },
    { label: 'Repartidor 1', value: 'Repartidor 1' },
    { label: 'Repartidor 2', value: 'Repartidor 2' },
    { label: 'Repartidor 3', value: 'Repartidor 3' },
  ];

  const paymentTypes = [
    { label: 'Seleccionar tipo de pago', value: '', isHeader: true },
    { label: 'Diario', value: 'Diario' },
    { label: 'Semanal', value: 'Semanal' },
    { label: 'Quincenal', value: 'Quincenal' },
  ];

  const statusTypes = [
    { label: 'Seleccionar estatus', value: '', isHeader: true },
    { label: 'Habilitado', value: 'Habilitado' },
    { label: 'Deshabilitado', value: 'Deshabilitado' },
  ];

  // Custom Dropdown component
  const CustomDropdown = ({ value, onPress }) => (
    <TouchableOpacity 
      style={styles.dropdownContainer}
      onPress={onPress}
    >
      <Text style={styles.inputText}>{value}</Text>
      <Ionicons name="chevron-down" size={20} color="#666" />
    </TouchableOpacity>
  );

  const handleSelectRoll = (item) => {
    if (!item.isHeader) {
      setSelectedRoll(item.value);
      setRollModalVisible(false);
    }
  };

  const handleSelectPayment = (item) => {
    if (!item.isHeader) {
      setSelectedPayment(item.value);
      setPaymentModalVisible(false);
    }
  };

  const handleSelectStatus = (item) => {
    if (!item.isHeader) {
      setSelectedStatus(item.value);
      setStatusModalVisible(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <View style={styles.content}>
          {/* Primera fila */}
          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Tipo-Roll</Text>
              <CustomDropdown 
                value={selectedRoll} 
                onPress={() => setRollModalVisible(true)} 
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Pago por</Text>
              <CustomDropdown 
                value={selectedPayment} 
                onPress={() => setPaymentModalVisible(true)} 
              />
            </View>
          </View>

          {/* Segunda fila */}
          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Sueldo</Text>
              <TextInput
                style={styles.input}
                value="$ 1500"
                keyboardType="numeric"
                placeholder="Ingrese sueldo"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Estatus</Text>
              <CustomDropdown 
                value={selectedStatus} 
                onPress={() => setStatusModalVisible(true)} 
              />
            </View>
          </View>

          {/* Tercera fila */}
          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Comision</Text>
              <CustomDropdown value="No Aplica" onPress={() => {}} />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Horario</Text>
              <View style={styles.timeContainer}>
                <TextInput
                  style={[styles.input, styles.timeInput]}
                  value="9:00 am"
                />
                <Text style={styles.timeText}>A</Text>
                <TextInput
                  style={[styles.input, styles.timeInput]}
                  value="5:00 pm"
                />
              </View>
            </View>
          </View>

          {/* Botones */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.buttonText}>Crear</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal para Tipo-Roll */}
        <Modal
          visible={isRollModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setRollModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <FlatList
                data={rollTypes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.modalItem,
                      item.isHeader && styles.modalHeader,
                    ]}
                    onPress={() => handleSelectRoll(item)}
                  >
                    <Text
                      style={[
                        styles.modalItemText,
                        item.isHeader && styles.modalHeaderText,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>

        {/* Modal para Tipo de Pago */}
        <Modal
          visible={isPaymentModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setPaymentModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <FlatList
                data={paymentTypes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.modalItem,
                      item.isHeader && styles.modalHeader,
                    ]}
                    onPress={() => handleSelectPayment(item)}
                  >
                    <Text
                      style={[
                        styles.modalItemText,
                        item.isHeader && styles.modalHeaderText,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>

        {/* Modal para Estatus */}
        <Modal
          visible={isStatusModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setStatusModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <FlatList
                data={statusTypes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.modalItem,
                      item.isHeader && styles.modalHeader,
                    ]}
                    onPress={() => handleSelectStatus(item)}
                  >
                    <Text
                      style={[
                        styles.modalItemText,
                        item.isHeader && styles.modalHeaderText,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  content: {
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'flex-end',
  },
  inputGroup: {
    flex: 1,
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
  dropdownContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  timeInput: {
    flex: 1,
  },
  timeText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
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
  inputText: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  modalItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  modalHeader: {
    backgroundColor: '#134B70',
  },
  modalItemText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  modalHeaderText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FormRoll;