import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FormDatosPe = ({ employeeData, setEmployeeData }) => {
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.content}>
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/perfiles.png')} 
                style={styles.profileImage}
              />
            </View>
          </View>

          {/* Form Fields */}
          <View style={styles.formFields}>
            {/* Left Column */}
            <View style={styles.column}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Nombres</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Evaristo Juan"
                />
              </View>

              <View style={styles.rowGroup}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Apellidos</Text>
                  <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Velasco"
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>&nbsp;</Text>
                  <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Hernandez"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Fecha de Ingreso</Text>
                <TextInput
                  style={styles.input}
                  placeholder="00/00/00"
                />
              </View>

              <View style={styles.rowGroup}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Telefono Celular</Text>
                  <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="55-00-00-00-00"
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>o</Text>
                  <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="55-00-00-00-00"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Número SS.</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Número de Seguro Social"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Numero de Cuenta</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0000-0000-0000-0000"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Curp</Text>
                <TextInput
                  style={styles.input}
                  placeholder="CURP"
                />
              </View>
            </View>

            {/* Right Column */}
            <View style={styles.column}>
              <Text style={styles.label}>Domicilio</Text>
              <View style={styles.addressGroup}>
                <TextInput
                  style={[styles.input, styles.addressInput]}
                  placeholder="Mexico"
                />
                <TextInput
                  style={[styles.input, styles.addressInput]}
                  placeholder="Benito Juarez"
                />
                <TextInput
                  style={[styles.input, styles.addressInput]}
                  placeholder="Mexico Lindo"
                />
                <TextInput
                  style={[styles.input, styles.addressInput]}
                  placeholder="# 255"
                />
                <TextInput
                  style={[styles.input, styles.addressInput]}
                  placeholder="CP.57000"
                />
              </View>

              <View style={styles.statusGroup}>
                <View style={styles.checkboxContainer}>
                  <Text style={styles.label}>Lista Negra</Text>
                  <TouchableOpacity style={styles.checkbox}>
                    <Ionicons name="checkmark" size={20} color="#fff" />
                  </TouchableOpacity>
                </View>
                
                <View style={styles.rollContainer}>
                  <Text style={styles.label}>Roll</Text>
                  <CustomDropdown value="vendedor" onPress={() => {}} />
                </View>

                <View style={styles.statusContainer}>
                  <Text style={styles.label}>Status</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Activo"
                    editable={false}
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  content: {
    gap: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ffd700',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  formFields: {
    flexDirection: 'row',
    gap: 20,
  },
  column: {
    flex: 1,
    gap: 15,
  },
  inputGroup: {
    flex: 1,
  },
  rowGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  halfInput: {
    flex: 1,
  },
  addressGroup: {
    gap: 10,
  },
  addressInput: {
    marginBottom: 5,
  },
  statusGroup: {
    marginTop: 15,
    gap: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: 24,
    height: 24,
    backgroundColor: '#0099ff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rollContainer: {
    marginVertical: 10,
  },
  statusContainer: {
    marginTop: 10,
  },
  dropdownContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});

export default FormDatosPe;