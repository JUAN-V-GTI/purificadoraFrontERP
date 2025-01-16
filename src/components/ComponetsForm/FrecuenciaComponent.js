import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Platform } from 'react-native';
import ModalComponent from './ModalComponent';

const FrecuenciaSelectorInput = ({ label, value, onChange }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const frecuenciapago = [
    { label: "Seleccionar frecuencia de pago", value: "", isHeader: true },
    { label: "Dia" ,value: "Dia" },
    { label: "Semanal",value: "Semanal"  },
    { label: "Quincenal",value: "Quincenal" },
  ];

  const handleSelectFrecuencia = (frec) => {
    if (!frec.isHeader) {
      onChange(frec.value);
      setModalVisible(false);
    }
  };

  const displayValue = frecuenciapago.find(frec => frec.value === value)?.label || 'Seleccionar';

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>
            {displayValue}
          </Text>
        </View>
      </TouchableOpacity>

      <ModalComponent
        isVisible={isModalVisible}
        data={frecuenciapago}
        onClose={() => setModalVisible(false)}
        onSelect={handleSelectFrecuencia}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 3,
    width: '100%',
  },
  label: {
    color: '#FFFFFF',
    marginBottom: 5,
    fontSize: 14,
  },
  inputContainer: {
    ...Platform.select({
      ios: {
        backgroundColor: '#2D2D2D',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {
          width: 4,
          height: 4,
        },
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
    borderRadius: 15,
    marginVertical: 5,
  },
  inputText: {
    color: '#666666',
    fontSize: 16,
  },
});

export default FrecuenciaSelectorInput;