import React, { useState } from 'react';
import { Platform, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputComponets from './InputComponets';

const DatePickerInput = ({ label, value, onChange }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
      onChange(selectedDate.toLocaleDateString());
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={showDatepicker}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>
            {value || 'Seleccionar Fecha'}
          </Text>
        </View>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}
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

export default DatePickerInput;