import React from 'react';
import { View, TextInput, Text, StyleSheet, Platform } from 'react-native';

const InputComponent = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  maxLength,
  secureTextEntry,
  formatFunction, // Función para formatear el texto
}) => {
  const handleTextChange = (text) => {
    // Si se pasa una función de formateo, aplica el formato
    if (formatFunction) {
      onChangeText(formatFunction(text));
    } else {
      onChangeText(text); // De lo contrario, pasa el texto sin formato
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        placeholderTextColor="#B0B0B0"
        keyboardType={keyboardType}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 5,
    marginHorizontal: 2,
  },
  label: {
    color: '#FFFFFF',
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#2D2D2D',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        backgroundColor: '#2D2D2D',
        elevation: 8,
      },
    }),
    borderWidth: 1,
    borderColor: '#3D3D3D',
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 16,
    borderRadius: 15,
    color: '#FFFFFF',
    width: '100%',
    marginVertical: 5,
  },
});

export default InputComponent;
