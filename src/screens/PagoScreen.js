import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { DollarSign, FileText } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import FormGasto from '../components/PagoForm/FormGasto';
import FormGastoV from '../components/PagoForm/FormGastoV';
import FormGastoF from '../components/PagoForm/FormGastoF';
import FormPago from '../components/PagoForm/FormPago';

const PagosScreen = () => {
    const [activeTab, setActiveTab] = useState('crear');
    const navigation = useNavigation();
  
    const renderContent = () => {
      switch (activeTab) {
        case 'crear':
          return <FormGasto />;
        case 'variable':
          return <FormGastoV />;
        case 'fijo':
          return <FormGastoF />;
        case 'registro':
          return <FormPago />;
        default:
          return <FormGasto />;
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        {/* Header with Image */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}
            style={styles.homeButton}
          >
            <Image 
              source={require('../../assets/iconolab3.webp')} // Ruta de tu imagen local
              style={styles.homeImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Pagos</Text>
        </View>
  
        {/* Menu Container */}
        <View style={styles.tabContainer}>
          <View style={styles.tabBackground}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'crear' && styles.activeTab]}
              onPress={() => setActiveTab('crear')}
            >
              <View style={styles.tabContent}>
                <DollarSign 
                  color={activeTab === 'crear' ? '#fff' : '#666'} 
                  size={20} 
                  style={styles.tabIcon}
                />
                <Text style={[styles.tabText, activeTab === 'crear' && styles.activeTabText]}>
                  Crear Tipo de Gasto
                </Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'variable' && styles.activeTab]}
              onPress={() => setActiveTab('variable')}
            >
              <View style={styles.tabContent}>
                <FileText 
                  color={activeTab === 'variable' ? '#fff' : '#666'} 
                  size={20} 
                  style={styles.tabIcon}
                />
                <Text style={[styles.tabText, activeTab === 'variable' && styles.activeTabText]}>
                  Pagos variables
                </Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'fijo' && styles.activeTab]}
              onPress={() => setActiveTab('fijo')}
            >
              <View style={styles.tabContent}>
                <FileText 
                  color={activeTab === 'fijo' ? '#fff' : '#666'} 
                  size={20} 
                  style={styles.tabIcon}
                />
                <Text style={[styles.tabText, activeTab === 'fijo' && styles.activeTabText]}>
                  Pagos fijos
                </Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'registro' && styles.activeTab]}
              onPress={() => setActiveTab('registro')}
            >
              <View style={styles.tabContent}>
                <DollarSign 
                  color={activeTab === 'registro' ? '#fff' : '#666'} 
                  size={20} 
                  style={styles.tabIcon}
                />
                <Text style={[styles.tabText, activeTab === 'registro' && styles.activeTabText]}>
                  Registro de Pago
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Content Area */}
        <ScrollView style={styles.content}>
          {renderContent()}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a',
      padding: 5,
      paddingBlock:20,
    
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 1,
      backgroundColor: '#1a1a1a',
      borderBottomWidth: 1,
      borderBottomColor: '#333',
    },
    homeButton: {
      marginRight: 16,
      padding: 1,
    },
    homeImage: {
      width: 54, // Ajusta el tamaño de la imagen según tus necesidades
      height: 54,
      resizeMode: 'contain',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#6200ee',
    },
    tabContainer: {
      backgroundColor: '#1a1a1a',
      paddingHorizontal: 16,
      marginBottom: 20,
      marginTop: 10,
    },
    tabBackground: {
      flexDirection: 'row',
      backgroundColor: '#333',
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
      padding: 1,
    },
    tab: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 4,
      justifyContent: 'center',
    },
    tabContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeTab: {
      backgroundColor: '#50C878',
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
    },
    tabIcon: {
      marginRight: 4,
    },
    tabText: {
      color: '#666',
      fontSize: 12,
      textAlign: 'center',
    },
    activeTabText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      backgroundColor: '#1a1a1a',
    },
  });
  
  export default PagosScreen;
