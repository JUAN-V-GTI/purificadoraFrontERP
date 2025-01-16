import React, { useState } from 'react';
import { View, ScrollView, StyleSheet,} from 'react-native';
import MenuScrollComponent from '../components/ComponentsBitacora/MenuScrollComponent';
import InputBitacora from '../components/ComponentsBitacora/InputBitacora'; // Importa el nuevo componente
import BitacoraMCForm from '../components/ComponentsBitacora/BitacoraMCForm';

const BitacoraScreen = () => {
  const [formData, setFormData] = useState({
    propietario: '',
    operador: '',
    direccion: '',
    periodo: '',
    
  });

  const updateFormData = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleMenuSelect = (option) => {
    console.log('Opción seleccionada:', option);
  };

  return (
    <View style={styles.container}>
      <MenuScrollComponent onOptionSelect={handleMenuSelect} />

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerSection}>
          {/* Reutiliza InputBitacora */}
          <InputBitacora
            labelLeft="Nombre del propietario"
            labelRight="Dirección de la purificadora"
            valueLeft={formData.propietario}
            valueRight={formData.direccion}
            onChangeLeft={(value) => updateFormData('propietario', value)}
            onChangeRight={(value) => updateFormData('direccion', value)}
          />
          <InputBitacora
            labelLeft="Nombre del operador"
            labelRight="Periodo"
            valueLeft={formData.operador}
            valueRight={formData.periodo}
            onChangeLeft={(value) => updateFormData('operador', value)}
            onChangeRight={(value) => updateFormData('periodo', value)}
          />
        </View>

        <BitacoraMCForm formData={formData} updateFormData={updateFormData} />
      </ScrollView>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
  },
  headerSection: {
    marginBottom: 20,
  },
  helpButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1000,
  },
 
  helpButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BitacoraScreen;
