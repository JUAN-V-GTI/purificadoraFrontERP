import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {  Database,Package,ShoppingCart,ClipboardList} from 'lucide-react-native'; 
import { useNavigation } from '@react-navigation/native';
import FormRegistro from '../components/MateriaPrima/FormRegistro';
import FormOrdenCompra from '../components/MateriaPrima/FormOrdenCompra';
import FormExistencia from '../components/MateriaPrima/FormExistencia';
import FormDatos from '../components/MateriaPrima/FormDatos';
  
  const MateriaPrima = () => {
      const [activeTab, setActiveTab] = useState('crear');
      const navigation = useNavigation();
      const renderContent = () => {
        switch (activeTab) {
          case 'registro':
            return <FormRegistro />;
          case 'orden':
            return <FormOrdenCompra />;
          case 'existencia':
            return <FormExistencia />;
          case 'producto':
            return <FormDatos />;
          default:
            return <FormRegistro />;
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
            <Text style={styles.headerText}>Materia Prima</Text>
          </View>
    
          {/* Menu Container */}
          <View style={styles.tabContainer}>
            <View style={styles.tabBackground}>
              <TouchableOpacity 
                style={[styles.tab, activeTab === 'registro' && styles.activeTab]}
                onPress={() => setActiveTab('registro')}
              >
                <View style={styles.tabContent}>
                  <ClipboardList
                    color={activeTab === 'registro' ? '#fff' : '#666'} 
                    size={20} 
                    style={styles.tabIcon}
                  />
                  <Text style={[styles.tabText, activeTab === 'registro' && styles.activeTabText]}>
                    Registro
                  </Text>
                </View>
              </TouchableOpacity>
    
              <TouchableOpacity 
                style={[styles.tab, activeTab === 'orden' && styles.activeTab]}
                onPress={() => setActiveTab('orden')}
              >
                <View style={styles.tabContent}>
                  <ShoppingCart
                    color={activeTab === 'orden' ? '#fff' : '#666'} 
                    size={20} 
                    style={styles.tabIcon}
                  />
                  <Text style={[styles.tabText, activeTab === 'orden' && styles.activeTabText]}>
                    Orden de Compra
                  </Text>
                </View>
              </TouchableOpacity>
    
              <TouchableOpacity 
                style={[styles.tab, activeTab === 'existencia' && styles.activeTab]}
                onPress={() => setActiveTab('existencia')}
              >
                <View style={styles.tabContent}>
                  <Package 
                    color={activeTab === 'existencia' ? '#fff' : '#666'} 
                    size={20} 
                    style={styles.tabIcon}
                  />
                  <Text style={[styles.tabText, activeTab === 'existencia' && styles.activeTabText]}>
                    En Existencia
                  </Text>
                </View>
              </TouchableOpacity>
    
              <TouchableOpacity 
                style={[styles.tab, activeTab === 'producto' && styles.activeTab]}
                onPress={() => setActiveTab('producto')}
              >
                <View style={styles.tabContent}>
                  <Database 
                    color={activeTab === 'producto' ? '#fff' : '#666'} 
                    size={20} 
                    style={styles.tabIcon}
                  />
                  <Text style={[styles.tabText, activeTab === 'producto' && styles.activeTabText]}>
                    Productos
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
        color: '#ffff',
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
    
    export default MateriaPrima;
  