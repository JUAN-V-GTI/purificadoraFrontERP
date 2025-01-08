import React from 'react';
import {
  StyleSheet,
  View,
  Text,

  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';


const FormListaNegra = ({ empleado }) => {
  // You can pass empleado data as props or manage with state if needed
  const defaultEmpleado = {
    nombre: 'Daniel Pelcastre Reyes',
    edad: '32',
    roll: 'Repartidor',
    domicilio: 'Cd Nezahualcoyotl calle panchita # 234',
    telefono: '55-45-34-23-34',
    sucursal: 'Sucursal: Inmaculada Madrugada',
    descripcion: 'Robo de triciclo y cuenta el dia 13/04/24'
  };

  const data = empleado || defaultEmpleado;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Lista Negra</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          {/* Profile Image */}
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../../assets/rata.jpg')} // Add your default profile image
              style={styles.profileImage}
              defaultSource={require('../../assets/rata.jpg')}
            />
          </View>

          {/* Information Card */}
          <View style={styles.infoCard}>
            {/* Header Info */}
            <View style={styles.infoHeader}>
              <Text style={styles.nombre}>{data.nombre}</Text>
              <Text style={styles.edad}>{data.edad}</Text>
              <Text style={styles.roll}>{data.roll}</Text>
            </View>

            {/* Address and Contact */}
            <View style={styles.infoRow}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Domicilio</Text>
                <Text style={styles.value}>{data.domicilio}</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Telefono</Text>
                <Text style={styles.value}>{data.telefono}</Text>
              </View>
            </View>

            {/* Description Section */}
            <View style={styles.descriptionSection}>
              <Text style={styles.label}>Descripción</Text>
              <View style={styles.descriptionBox}>
                <Text style={styles.sucursal}>{data.sucursal}</Text>
                <Text style={styles.descripcion}>{data.descripcion}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Ex-Empleados Section */}
        <View style={styles.exEmpleadosSection}>
          <Text style={styles.exEmpleadosTitle}>EX-Empleados</Text>
          {/* Add your list of ex-empleados here */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
  },

  content: {
    flex: 1,
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#000',
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#ff0000',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
    marginBottom: 16,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  edad: {
    fontSize: 16,
    color: '#666',
  },
  roll: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  labelContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
  },
  descriptionSection: {
    marginTop: 8,
  },
  descriptionBox: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    borderRadius: 8,
  },
  sucursal: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 16,
    color: '#333',
  },
  exEmpleadosSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginTop: 24,
  },
  exEmpleadosTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff0000',
    marginBottom: 16,
  },
});

export default FormListaNegra;