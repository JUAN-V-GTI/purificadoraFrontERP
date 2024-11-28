import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  useWindowDimensions,
  
} from 'react-native';
import { 
  Bell, 
  ChevronLeft, 
  ChevronRight,
  UserPlus,
  ClipboardList,
  Users,
  UserCircle,
  LineChart,
  DollarSign
} from 'react-native';

const EmpleadoScreen = () => {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const window = useWindowDimensions();
  
  const menuItems = [
    { icon: <UserPlus size={24} color="#000" />, label: 'Agregar Empleado' },
    { icon: <ClipboardList size={24} color="#000" />, label: 'Nomina' },
    { icon: <Users size={24} color="#000" />, label: 'Roll' },
    { icon: <UserCircle size={24} color="#000" />, label: 'Datos Personales' },
    { icon: <LineChart size={24} color="#000" />, label: 'Ventas' },
    { icon: <DollarSign size={24} color="#000" />, label: 'Comisiones' },
  ];

  const visibleMenuItems = 4;
  const maxIndex = menuItems.length - visibleMenuItems;

  const handlePrevious = () => {
    setCurrentMenuIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentMenuIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <View style={[styles.container, { width: window.width }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EMPLEADOS</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Bell size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Menu Icons */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.arrowButton} 
          onPress={handlePrevious}
          disabled={currentMenuIndex === 0}
        >
          <ChevronLeft size={24} color={currentMenuIndex === 0 ? '#ccc' : '#000'} />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
          {menuItems
            .slice(currentMenuIndex, currentMenuIndex + visibleMenuItems)
            .map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.menuItem}
              >
                {item.icon}
                <Text style={styles.menuLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
        </View>

        <TouchableOpacity 
          style={styles.arrowButton} 
          onPress={handleNext}
          disabled={currentMenuIndex === maxIndex}
        >
          <ChevronRight size={24} color={currentMenuIndex === maxIndex ? '#ccc' : '#000'} />
        </TouchableOpacity>
      </View>

      {/* Form */}
      <ScrollView style={styles.formContainer}>
        <View style={styles.formRow}>
          <TextInput 
            style={styles.input} 
            placeholder="Nombre"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Apellido Paterno"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Apellido Materno"
          />
        </View>

        <View style={styles.formRow}>
          <TextInput 
            style={styles.input} 
            placeholder="Estado"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Colonia"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Calle"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Num.Int"
          />
          <TextInput 
            style={styles.input} 
            placeholder="C.postal"
          />
        </View>

        <View style={styles.formRow}>
          <TextInput 
            style={styles.input} 
            placeholder="Roll"
          />
          <View style={styles.phoneContainer}>
            <Text>Telefono Celular</Text>
            <View style={styles.phoneInputs}>
              <TextInput 
                style={styles.phoneInput} 
                placeholder="55-00-00-00-00"
              />
              <Text>o</Text>
              <TextInput 
                style={styles.phoneInput} 
                placeholder="55-00-00-00-00"
              />
            </View>
          </View>
        </View>

        <View style={styles.formRow}>
          <View style={styles.dateContainer}>
            <Text>Fecha de Ingreso</Text>
            <TextInput 
              style={styles.dateInput} 
              placeholder="00/00/00"
            />
          </View>
          <TextInput 
            style={styles.input} 
            placeholder="Número SS."
          />
        </View>

        <View style={styles.formRow}>
          <TouchableOpacity style={styles.photoButton}>
            <Text>Seleccionar Archivo</Text>
          </TouchableOpacity>
          <TextInput 
            style={styles.input} 
            placeholder="Numero de Cuenta"
          />
          <TextInput 
            style={styles.input} 
            placeholder="Curp"
          />
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationIcon: {
    padding: 8,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  arrowButton: {
    padding: 8,
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    alignItems: 'center',
    padding: 8,
  },
  menuLabel: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  formContainer: {
    padding: 16,
  },
  formRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    minWidth: 150,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff',
  },
  phoneContainer: {
    flex: 2,
    minWidth: 300,
  },
  phoneInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff',
  },
  dateContainer: {
    flex: 1,
    minWidth: 150,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff',
  },
  photoButton: {
    flex: 1,
    minWidth: 150,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: '#1a73e8',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default EmpleadoScreen;