import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ImageBackground,TextInput, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import FormEmpleado from '../components/FormEmpleado';
import FormNomina from '../components/FormNomina';
import FormRoll from '../components/FormRoll';
import FormDatosPe from '../components/FormDatosPe'; 
import FormListaNegra from '../components/FormListaNegra';

const EmployeeScreen = () => {
  const [activeSection, setActiveSection] = useState(''); // Para controlar qué sección está activa
  const [employeeData, setEmployeeData] = useState({
    
  });

  // Función para renderizar el contenido según la sección activa
  const renderContent = () => {
    switch (activeSection) {
      case 'Nomina':
        return (
          <FormNomina 
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
          />
        );
      case 'Agregar Empleado':
        return (
          <FormEmpleado 
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
          />
        );
        case 'Roll':
          return (
            <FormRoll 
              employeeData={employeeData}
              setEmployeeData={setEmployeeData}
            />
          );
          case 'Datos Personales':
            return (
              <FormDatosPe 
                employeeData={employeeData}
                setEmployeeData={setEmployeeData}
              />
            );
            case 'Lista Negra':
              return (
                <FormListaNegra 
                  employeeData={employeeData}
                  setEmployeeData={setEmployeeData}
                />
              );
      default:
        return (
          <View style={styles.placeholderContent}>
            <Text>Seleccione una opción del menú</Text>
          </View>
        );
    }
  };

  return (
    <ImageBackground
    source={require('../../assets/fondo2.jpg')}
    style={styles.background}
  >

    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EMPLEADOS</Text>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar"
            placeholderTextColor="#666"
          />
          <Ionicons name="search" size={24} color="#666" style={{ margin: 10 }} />
        </View>
        <Ionicons name="notifications-outline" size={24} color="#201E43" style={styles.notificationIcon} />
      </View>

      {/* Menu Icons */}
      <View style={styles.menuContainer}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#EEEEEE" />
        </TouchableOpacity>
        <View style={styles.menuIcons}>
          <TouchableOpacity 
            style={[
              styles.menuItem, 
              activeSection === 'Agregar Empleado' && styles.activeMenuItem
            ]}
            onPress={() => setActiveSection('Agregar Empleado')}
          >
            <Ionicons 
              name="people" 
              size={24} 
              color={activeSection === 'Agregar Empleado' ? '#201E43'  : '#EEEEEE'} 
            />
            <Text style={[
              styles.menuText,
              activeSection === 'Agregar Empleado' && styles.activeMenuText
            ]}>Agregar Empleado</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.menuItem,
              activeSection === 'Nomina' && styles.activeMenuItem
            ]}
            onPress={() => setActiveSection('Nomina')}
          >
            <Ionicons 
              name="cash-outline" 
              size={24} 
              color={activeSection === 'Nomina' ? '#201E43'  : '#EEEEEE'} 
            />
            <Text style={[
              styles.menuText,
              activeSection === 'Nomina' && styles.activeMenuText
            ]}>Nomina</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.menuItem,
              activeSection === 'Roll' && styles.activeMenuItem
            ]}
            onPress={() => setActiveSection('Roll')}
          >
            <MaterialIcons 
              name="admin-panel-settings" 
              size={24} 
              color={activeSection === 'Roll' ? '#201E43'  : '#EEEEEE'} 
            />
            <Text style={[
              styles.menuText,
              activeSection === 'Roll' && styles.activeMenuText
            ]}>Roll</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.menuItem,
              activeSection === 'Datos Personales' && styles.activeMenuItem
            ]}
            onPress={() => setActiveSection('Datos Personales')}
          >
            <Ionicons 
              name="person" 
              size={24} 
              color={activeSection === 'Datos Personales' ? '#201E43' : '#EEEEEE'} 
            />
            <Text style={[
              styles.menuText,
              activeSection === 'Datos Personales' && styles.activeMenuText
            ]}>Datos Personales</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.menuItem,
              activeSection === 'Lista Negra' && styles.activeMenuItem
            ]}
            onPress={() => setActiveSection('Lista Negra')}
          >
            <MaterialIcons 
              name="block" 
              size={24} 
              color={activeSection === 'Lista Negra' ? '#201E43'  : '#EEEEEE'} 
            />
            <Text style={[
              styles.menuText,
              activeSection === 'Lista Negra' && styles.activeMenuText
            ]}>Lista Negra</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="chevron-forward" size={24} color="#EEEEEE" />
        </TouchableOpacity>
      </View>
      {renderContent()}
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    flex: 0.4,
    marginTop: 10,
    height:40, 
  },
  searchInput: {
    
    flex: 1,
    padding: 10,
    marginRight: 8,
  },

  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#201E43',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  menuIcons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  activeMenuItem: {
    backgroundColor: '#EEEEEE',
    
  },
  menuText: {
    fontSize: 12,
    color: '#EEEEEE',
    marginTop: 5,
  },
  activeMenuText: {
    color: '#201E43',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    gap: 10,
  },
  searchButton: {
    backgroundColor: '#6666ff',
    padding: 15,
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: '#ff3333',
    padding: 15,
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  placeholderContent: {
    flex: 1,
    backgroundColor: '#e8f4e8',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmployeeScreen;