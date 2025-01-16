import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const FormOrdenCompra = () => {
  const [formData, setFormData] = useState({
    producto: '',
    pz: '',
    costo: '',
    proveedor: '',
  });

  const currentDate = new Date().toLocaleDateString();
  const registrador = 'Juan velasco';

  const handleInventariar = () => {
    console.log('Inventariando:', formData);
  };

  const handleSave = () => {
    console.log('Guardando:', formData);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.column}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Producto</Text>
            <TextInput
              style={styles.input}
              value={formData.producto}
              onChangeText={(text) => setFormData({ ...formData, producto: text })}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pz</Text>
            <TextInput
              style={styles.input}
              value={formData.pz}
              onChangeText={(text) => setFormData({ ...formData, pz: text })}
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Costo</Text>
            <TextInput
              style={styles.input}
              value={formData.costo}
              onChangeText={(text) => setFormData({ ...formData, costo: text })}
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Proveedor</Text>
            <TextInput
              style={styles.input}
              value={formData.proveedor}
              onChangeText={(text) => setFormData({ ...formData, proveedor: text })}
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.infoGroup}>
            <Text style={styles.label}>Fecha</Text>
            <Text style={styles.infoText}>{currentDate}</Text>
          </View>

          <View style={styles.infoGroup}>
            <Text style={styles.label}>Registro</Text>
            <Text style={styles.infoText}>{registrador}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.inventarioButton} onPress={handleInventariar}>
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
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  infoGroup: {
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
  infoText: {
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#2a2a2a',
    padding: 12,
    borderRadius: 80
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 80,
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

export default FormOrdenCompra;