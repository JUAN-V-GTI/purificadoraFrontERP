import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const FormRegistro = () => {
  const [formData, setFormData] = useState({
    producto: '',
    costo: '',
    productoMinimo: '',
    productoMaximo: '',
    descripcion: '',
  });

  const handleApply = () => {
    console.log('Datos aplicados:');
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
            <Text style={styles.label}>Producto Mínimo</Text>
            <TextInput
              style={styles.input}
              value={formData.productoMinimo}
              onChangeText={(text) => setFormData({ ...formData, productoMinimo: text })}
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Producto Máximo</Text>
            <TextInput
              style={styles.input}
              value={formData.productoMaximo}
              onChangeText={(text) => setFormData({ ...formData, productoMaximo: text })}
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.descripcion}
              onChangeText={(text) => setFormData({ ...formData, descripcion: text })}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyButtonText}>Crear</Text>
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
  textArea: {
    height: 190,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
    marginHorizontal: 1,
  },
  applyButton: {
    backgroundColor: '#6200ee',
    padding: 6,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FormRegistro;