import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const HoraComponent = ({ label, value, onChange }) => {
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [startTime, setStartTime] = useState(new Date());


  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const handleStartTimeChange = (event, selectedTime) => {
    setShowStartPicker(Platform.OS === 'ios');
    if (selectedTime) {
      setStartTime(selectedTime);
      onChange(`${formatTime(selectedTime)}`);
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.timeContainer}>
        <TouchableOpacity 
          style={styles.timeInput} 
          onPress={() => setShowStartPicker(true)}
        >
          <Text style={styles.inputText}>
            {formatTime(startTime)}
          </Text>
        </TouchableOpacity>
        
      </View>

      {showStartPicker && (
        <DateTimePicker
          value={startTime}
          mode="time"
          is24Hour={false}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleStartTimeChange}
        />
      )}

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
    width: '100%',
  },
  label: {
    color: '#FFFFFF',
    marginBottom: 5,
    fontSize: 14,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeInput: {
    flex: 1,
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
    textAlign: 'center',
  },
  separator: {
    color: '#FFFFFF',
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default HoraComponent;