import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ImageBackground,TextInput, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import FormDetalleCliente from '../components/ClienteForm/FormDetalleCliente';
import FormHistorialCliente from  '../components/ClienteForm/FormHistorialCliente';
import FormCliente from '../components/ClienteForm/FormCliente';
import FormEditarCliente from '../components/ClienteForm/FormEditarCliente';


const ClienteScreen = () => {
  const [activeSection, setActiveSection] = useState(''); // Para controlar qué sección está activa
  const [employeeData, setEmployeeData] = useState({
    
  });

  // Función para renderizar el contenido según la sección activa
  const renderContent = () => {
    switch (activeSection) {
      case 'Editar Cliente':
        return (
          <FormEditarCliente 
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
          />
        );
      case 'Agregar Cliente':
        return (
          <FormCliente 
            employeeData={employeeData}
            setEmployeeData={setEmployeeData}
          />
        );
       
          case 'Historial Compras':
            return (
              <FormHistorialCliente 
                employeeData={employeeData}
                setEmployeeData={setEmployeeData}
              />
            );
            case 'Detalle Cliente':
              return (
                <FormDetalleCliente 
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
        <Text style={styles.headerTitle}>CLIENTES</Text>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Nombre "
            placeholderTextColor="#666"
          />
           <TextInput
            style={styles.searchInput}
            placeholder="Calle "
            placeholderTextColor="#666"
          />
           <TextInput
            style={styles.searchInput}
            placeholder="Número "
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
              activeSection === 'Agregar Cliente' && styles.activeMenuItem
            ]}
            onPress={() => setActiveSection('Agregar Cliente')}
          >
            <Ionicons 
              name="add-circle-outline" 
              size={24} 
              color={activeSection === 'Agregar Cliente' ? '#201E43'  : '#EEEEEE'} 
            />
            <Text style={[
              styles.menuText,
              activeSection === 'Agregar Cliente' && styles.activeMenuText
            ]}>Agregar Cliente</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.menuItem,
              activeSection === 'Historial Compras' && styles.activeMenuItem
            ]}
            onPress={() => setActiveSection('Historial Compras')}
          >
            <Ionicons 
              name="clipboard-outline" 
              size={24} 
              color={activeSection === 'Historial Compras' ? '#201E43'  : '#EEEEEE'} 
            />
            <Text style={[
              styles.menuText,
              activeSection === 'Historial Compras' && styles.activeMenuText
            ]}>Historial Compras</Text>
          </TouchableOpacity>
         
          <TouchableOpacity 
            style={[
              styles.menuItem,
              activeSection === 'Detalle Cliente' && styles.activeMenuItem
            ]}
            onPress={() => setActiveSection('Detalle Cliente')}
          >
            <Ionicons 
              name="person-outline" 
              size={24} 
              color={activeSection === 'Detalle Cliente' ? '#201E43' : '#EEEEEE'} 
            />
            <Text style={[
              styles.menuText,
              activeSection === 'Detalle Cliente' && styles.activeMenuText
            ]}>Detalle Cliente</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[
              styles.menuItem,
              activeSection === 'Editar Cliente' && styles.activeMenuItem
            ]}
            onPress={() => setActiveSection('Editar Cliente')}
          >
            <Ionicons 
              name="create-outline" 
              size={24} 
              color={activeSection === 'Editar Cliente' ? '#201E43'  : '#EEEEEE'} 
            />
            <Text style={[
              styles.menuText,
              activeSection === 'Editar Cliente' && styles.activeMenuText
            ]}>Editar Cliente</Text>
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
    marginTop: 1,
    height:45, 
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

export default ClienteScreen;