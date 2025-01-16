import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Animated } from 'react-native';

const InputBitacora = ({ 
  labelLeft, 
  labelRight, 
  valueLeft, 
  valueRight, 
  onChangeLeft, 
  onChangeRight 
}) => {
  const [isFocusedLeft, setIsFocusedLeft] = useState(false);
  const [isFocusedRight, setIsFocusedRight] = useState(false);

  return (
    <View style={styles.row}>
      {/* Input Izquierdo */}
      <View style={styles.inputGroup}>
        <Animated.Text
          style={[
            styles.placeholder,
            (isFocusedLeft || valueLeft) && styles.placeholderFocused,
          ]}
        >
          {labelLeft}
        </Animated.Text>
        <TextInput
          style={[styles.input]}
          value={valueLeft}
          onChangeText={onChangeLeft}
          onFocus={() => setIsFocusedLeft(true)}
          onBlur={() => setIsFocusedLeft(false)}
          placeholderTextColor="transparent" // No se ve el texto del placeholder cuando está vacío
        />
      </View>

      {/* Input Derecho */}
      <View style={styles.inputGroup}>
        <Animated.Text
          style={[
            styles.placeholder,
            (isFocusedRight || valueRight) && styles.placeholderFocused,
          ]}
        >
          {labelRight}
        </Animated.Text>
        <TextInput
          style={[styles.input]}
          value={valueRight}
          onChangeText={onChangeRight}
          onFocus={() => setIsFocusedRight(true)}
          onBlur={() => setIsFocusedRight(false)}
          placeholderTextColor="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputGroup: {
    flex: 1,
    marginHorizontal: 5,
    position: 'relative',
  },
  placeholder: {
    position: 'absolute',
    left: 0,
    top: 15,
    color: '#888',
    fontSize: 14,
  },
  placeholderFocused: {
    top: -10,
    fontSize: 12,
    color: '#FFF',
  },
  input: {
    color: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    paddingVertical: 6,
    fontSize: 14,
    backgroundColor: 'transparent',
  },
});

export default InputBitacora;
