// CustomAlert.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomAlert = ({ isVisible, title, message, onConfirm }) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropColor="rgba(0, 0, 0, 0.5)"  // Fondo gris con transparencia
      backdropOpacity={2.5}
    >
      <View style={styles.modalContainer}>
      <View style={styles.iconContainer}>
          <Icon name="warning" size={40} color="red" />
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.divider} />  
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity style={styles.button} onPress={onConfirm}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'black',
   
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    top: -40,
    backgroundColor: '',
    borderRadius: 30,
    padding: 10,
    zIndex: 1,
    borderColor:'#ffa02e',
  },
 /*  modalContainer: {
    backgroundColor: '#171f25',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  }, */
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  divider: {
    width: '100%',  // Ancho completo del modal
    height: 3,      // Altura de la línea
    backgroundColor: 'red',  // Color de la línea
    marginVertical: 5,  // Espacio arriba y abajo de la línea
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomAlert;
