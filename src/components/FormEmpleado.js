import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const FormEmpleado = ({ onSave }) => {
  const [selectedRoll, setSelectedRoll] = useState('');
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const roles = [
    { label: 'Seleccionar Roll', value: '', isHeader: true },
    { label: 'Administrador', value: 'admin' },
    { label: 'Vendedor', value: 'empleado' },
    { label: 'Repartidor', value: 'empleados' },
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    estado: '',
    colonia: '',
    calle: '',
    numInt: '',
    cPostal: '',
    telefonoCelular: '',
    telefonoAlt: '',
    fechaIngreso: '',
    numeroSS: '',
    numeroCuenta: '',
    curp: '',
  });

  const handleSelectRole = (role) => {
    if (!role.isHeader) {
      setSelectedRoll(role.value);
      setModalVisible(false);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    setFormData({
      ...formData,
      fechaIngreso: currentDate.toLocaleDateString(),
    });
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Se necesitan permisos para acceder a la galería');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    onSave?.(formData);
  };

  return (
    <ScrollView style={styles.formContainer}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={formData.nombre}
          onChangeText={(text) => setFormData({ ...formData, nombre: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido Paterno"
          value={formData.apellidoPaterno}
          onChangeText={(text) =>
            setFormData({ ...formData, apellidoPaterno: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido Materno"
          value={formData.apellidoMaterno}
          onChangeText={(text) =>
            setFormData({ ...formData, apellidoMaterno: text })
          }
        />
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Estado"
          value={formData.estado}
          onChangeText={(text) => setFormData({ ...formData, estado: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Colonia"
          value={formData.colonia}
          onChangeText={(text) => setFormData({ ...formData, colonia: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Calle"
          value={formData.calle}
          onChangeText={(text) => setFormData({ ...formData, calle: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Num.Int"
          value={formData.numInt}
          onChangeText={(text) => setFormData({ ...formData, numInt: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="C.postal"
          value={formData.cPostal}
          onChangeText={(text) => setFormData({ ...formData, cPostal: text })}
        />
      </View>

      <View style={styles.horizontalContainer}>
        <View style={styles.roleContainer}>
        
          <TouchableOpacity
            style={styles.pickerButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.pickerButtonText}>
              {roles.find((role) => role.value === selectedRoll)?.label ||
                'Seleccionar Roll'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dateContainer}>
          
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateInput}>
              {formData.fechaIngreso || 'Seleccionar Fecha'}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <View style={styles.photoContainer}>
        
          <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
          <Text style={{ color: '#89A8B2' }}>Seleccionar Archivo</Text>

            <Ionicons name="camera" size={24} color="#508C9B" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={roles}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.modalItem, item.isHeader && styles.modalHeader]}
                  onPress={() => handleSelectRole(item)}
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

      <View style={styles.phoneContainer}>
        <TextInput
          style={styles.phoneInput}
          placeholder="Número de celular"
          value={formData.telefonoCelular}
          onChangeText={(text) =>
            setFormData({ ...formData, telefonoCelular: text })
          }
          keyboardType="phone-pad"
        />
        <Text style={styles.phoneLabel}>ó</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Número de casa"
          value={formData.telefonoAlt}
          onChangeText={(text) =>
            setFormData({ ...formData, telefonoAlt: text })
          }
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Número SS."
          value={formData.numeroSS}
          onChangeText={(text) =>
            setFormData({ ...formData, numeroSS: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Número de cuenta"
          value={formData.numeroCuenta}
          onChangeText={(text) =>
            setFormData({ ...formData, numeroCuenta: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Curp"
          value={formData.curp}
          onChangeText={(text) => setFormData({ ...formData, curp: text })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Crear</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
    gap: 10,
  },
  roleContainer: {
    flex: 1,
  },
  pickerButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 1.3,
  },
  pickerButtonText: {
    fontSize: 16,

    color: '#89A8B2',

    textAlign: 'center',
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
  dateContainer: {
    flex: 1,
  },
  photoContainer: {
    flex: 1,
  },
  dateInput: {
    backgroundColor: '#fff',
    padding: 11,
    borderRadius: 5,
    marginTop: 3.3,
    color: '#89A8B2',
  },
  photoButton: {
    backgroundColor: '#fff',
    
    padding: 9,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1.3,
    
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    
  },
  phoneInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  phoneLabel: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 5,
    marginBottom: 50,
  },
  saveButton: {
    backgroundColor: '#4335A7',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FormEmpleado;