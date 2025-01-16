import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const FormDatos = () => {
  const [formData, setFormData] = useState({
    producto: '',
    costoUnitario: '',
    productoMinimo: '',
    productoMaximo: '',
    searchProduct: '',
    pz: '',
    costoTotal: '',
    descripcion: '',
  });
  const handleEditar = () => {
    console.log('Editar:', formData);
  };

  const handleSave = () => {
    console.log('Guardando:', formData);
  };
  return (
    <ScrollView style={styles.container}>
     
      
      <View style={styles.contentContainer}>
        {/* Left Column */}
        <View style={styles.column}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Producto</Text>
            <TextInput
              style={styles.input}
              value={formData.producto}
              onChangeText={(text) => setFormData({...formData, producto: text})}
              placeholderTextColor="#fff"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Costo Unitario</Text>
            <TextInput
              style={styles.input}
              value={formData.costoUnitario}
              onChangeText={(text) => setFormData({...formData, costoUnitario: text})}
              keyboardType="numeric"
              placeholderTextColor="#fff"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Producto Mínimo</Text>
            <TextInput
              style={styles.input}
              value={formData.productoMinimo}
              onChangeText={(text) => setFormData({...formData, productoMinimo: text})}
              keyboardType="numeric"
              placeholderTextColor="#fff"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Producto Máximo</Text>
            <TextInput
              style={styles.input}
              value={formData.productoMaximo}
              onChangeText={(text) => setFormData({...formData, productoMaximo: text})}
              keyboardType="numeric"
              placeholderTextColor="#fff"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pz</Text>
            <TextInput
              style={styles.input}
              value={formData.producto}
              onChangeText={(text) => setFormData({...formData, Pz: text})}
              placeholderTextColor="#fff"
            />
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.column}>
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar producto..."
                placeholderTextColor="#fff"
                value={formData.searchProduct}
                onChangeText={(text) => setFormData({...formData, searchProduct: text})}
              />
            </View>
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
          </View>

         

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Costo Total</Text>
            <TextInput
              style={styles.input}
              value={formData.costoTotal}
              onChangeText={(text) => setFormData({...formData, costoTotal: text})}
              keyboardType="numeric"
              placeholderTextColor="#fff"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              value={formData.descripcion}
              onChangeText={(text) => setFormData({...formData, descripcion: text})}
              multiline
              numberOfLines={4}
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.inventarioButton} onPress={handleEditar}>
              <Text style={styles.buttonText}>Inventariar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
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
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginHorizontal: 10,
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
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginBlock:25,
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  searchInput: {
    backgroundColor: '#4B5D67',
    borderRadius: 10,
    padding: 7,
    color: '#000000',
  },
  searchButton: {
    backgroundColor: '#6200ee',
    padding: 6,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 43,
    gap: 50,
  },
  inventarioButton: {
    backgroundColor: '#E6A23C',
    padding: 6,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#6200ee',
    padding: 6,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormDatos;