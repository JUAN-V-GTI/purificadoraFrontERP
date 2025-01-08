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

const FormNomina = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    name: 'Juan Velasco Hernandez',
    startTime: '9:00 am',
    endTime: '5:00 pm',
    role: 'Vendedor',
    sales: '50pz',
    salary: '1600.00',
    comision: '2.70',
    dailyCommission: '180.97',
    weeklyCommission: '1200.00',
    paymentType: 'Diario'
  });

  const paymentTypes = [
    { label: 'Seleccionar tipo de pago', value: '', isHeader: true },
    { label: 'Diario', value: 'Diario' },
    { label: 'Semanal', value: 'Semanal' },
    { label: 'Quincenal', value: 'Quincenal' },
  ];

  const handleSelectPaymentType = (item) => {
    if (!item.isHeader) {
      setEmployeeData({ ...employeeData, paymentType: item.value });
      setModalVisible(false);
    }
  };

  const handleApply = () => {
    // Aquí puedes implementar la lógica para guardar o procesar los datos
    console.log('Datos aplicados:', employeeData);
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
                value={employeeData.name}
                onChangeText={(text) => setEmployeeData({...employeeData, name: text})}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>role</Text>
              <TextInput
                style={styles.input}
                value={employeeData.role}
                onChangeText={(text) => setEmployeeData({...employeeData, role: text})}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Sueldo</Text>
              <TextInput
                style={styles.input}
                value={`$ ${employeeData.salary}`}
                onChangeText={(text) => {
                  const value = text.replace('$ ', '');
                  setEmployeeData({...employeeData, salary: value});
                }}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Comision</Text>
              <TextInput
                style={styles.input}
                value={`$ ${employeeData.comision}`}
                onChangeText={(text) => {
                  const value = text.replace('$ ', '');
                  setEmployeeData({...employeeData, comision: value});
                }}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Pago por</Text>
              <TouchableOpacity 
                style={styles.dropdownContainer}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.inputText1}>{employeeData.paymentType}</Text>
                <Ionicons name="chevron-down" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.column}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Horario</Text>
              <View style={styles.timeContainer}>
                <TextInput
                  style={[styles.input, styles.timeInput]}
                  value={employeeData.startTime}
                  onChangeText={(text) => setEmployeeData({...employeeData, startTime: text})}
                />
                <Text style={styles.timeText}>A</Text>
                <TextInput
                  style={[styles.input, styles.timeInput]}
                  value={employeeData.endTime}
                  onChangeText={(text) => setEmployeeData({...employeeData, endTime: text})}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Ventas</Text>
              <TextInput
                style={styles.input}
                value={employeeData.sales}
                onChangeText={(text) => setEmployeeData({...employeeData, sales: text})}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Comision del día</Text>
              <TextInput
                style={styles.input}
                value={`$ ${employeeData.dailyCommission}`}
                onChangeText={(text) => {
                  const value = text.replace('$ ', '');
                  setEmployeeData({...employeeData, dailyCommission: value});
                }}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Comision por semana</Text>
              <TextInput
                style={styles.input}
                value={`$ ${employeeData.weeklyCommission}`}
                onChangeText={(text) => {
                  const value = text.replace('$ ', '');
                  setEmployeeData({...employeeData, weeklyCommission: value});
                }}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        {/* Botón Aplicar dentro del contenedor */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyButtonText}>Pagar</Text>
          </TouchableOpacity>
        </View>

        {/* Modal para tipo de pago */}
        <Modal
          visible={isModalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
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
                    onPress={() => handleSelectPaymentType(item)}
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
  },
  timeInput: {
    flex: 1,
  },
  timeText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  inputText: {
    fontSize: 16,
    color:'#fff',
  },
  inputText1: {
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
});

export default FormNomina;