import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text,Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PhotoSelectorInput = ({ label, value, onChange }) => {
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Se necesitan permisos para acceder a la galería');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>
            {value ? 'Imagen seleccionada' : 'Seleccionar Foto'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
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
          width: 2,
          height: 20,
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

export default PhotoSelectorInput;