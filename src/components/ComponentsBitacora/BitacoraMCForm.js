// BitacoraMCForm.js
import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import HoraComponent from '../ComponetsForm/HoraComponent';
import DatePickerInput from '../ComponetsForm/DatePickerInput';
import InputComponents from '../ComponetsForm/InputComponets';
import ButtonComponent from '../ComponetsForm/ButtonComponent';
import ButtonHelp from "./ButtonHelp";
const BitacoraMCForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    horaCruda: "",
    hora1: "",
    hora2: "",
    hora3: "",
    hora4: "",
    cloroCruda:"",
    cloro1:"",
    cloro2:"",
    cloro3:"",
    cloro4:"",
    ph:"",
    dureza:"",
    fechaIngreso:"",
  });
  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
 
  const handleSave = () => {
    onSave?.(formData);
  };

  return (
    <View style={styles.container}>
      {/* Título de la Bitácora */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          BITACORA DE MEDICION DE CLORO RESIDUAL, PH Y DUREZA
          </Text>
          <ButtonHelp 
    helpText={`
      Instrucciones de llenado:
      1.- En AGUA CRUDA realizar 1 vez al día la medición de cloro y pH o en caso de que se llene más de 1 vez al día el tanque de agua cruda, se deberá de realizar la medición.
      2.- En parte de fecha, colocar de qué día a qué día de la semana se está realizando la medición.
      3.- Colocar los datos numéricos de acuerdo a la medición en cada recuadro, en día y hora según corresponda (agua cruda / agua purificada).

      Límite Máximo Permisible:
      1.- Cloro: 0.2 a 1.5 mg/L
      2.- pH: 6.5 a 8.5
      3.- Dureza: 500.00 mg/L
      
      Agua Purificada:
      1.- Cloro: 0.1 mg/L
    `}
  /></View>

      {/* Contenedor Principal */}
      <View style={styles.mainContainer}>
        {/* Sección Agua Cruda */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AGUA CRUDA</Text>
          
          <View style={styles.row}>
            <View style={styles.halfWidth}>
            <HoraComponent
                label="Hora"
                value={formData.horaCruda}
                onChange={(value) => updateFormData("horaCruda", value)}
              />
            </View>
            <View style={styles.halfWidth}>
            <DatePickerInput
                  label="Fecha "
                  value={formData.fechaIngreso}
                  onChange={(value) => updateFormData("fechaIngreso", value)}
                />
            </View>
          </View>

          
<InputComponents
                  label="pH"
                  value={formData.ph}
                  onChangeText={(value) => updateFormData("ph", value)}
                />

<InputComponents
                  label="Cloro"
                  value={formData.cloroCruda}
                  onChangeText={(value) => updateFormData("cloroCruda", value)}
                />

        
<InputComponents
                  label="Dureza"
                  value={formData.dureza}
                  onChangeText={(value) => updateFormData("dureza", value)}
                />
        </View>

        {/* Sección Agua Purificada */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AGUA PURIFICADA</Text>
          
        
            <View style={styles.row}>
              <View style={styles.halfWidth}>
              <HoraComponent
                label="Hora"
                value={formData.hora1}
                onChange={(value) => updateFormData("hora1", value)}
              />
              </View>
              <View style={styles.halfWidth}>
              <InputComponents
                  label="Cloro"
                  value={formData.cloro1}
                  onChangeText={(value) => updateFormData("cloro1", value)}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.halfWidth}>
              <HoraComponent
                label="Hora"
                value={formData.hora2}
                onChange={(value) => updateFormData("hora2", value)}
              />
              </View>
              <View style={styles.halfWidth}>
              <InputComponents
                  label="Cloro"
                  value={formData.cloro2}
                  onChangeText={(value) => updateFormData("cloro2", value)}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.halfWidth}>
              <HoraComponent
                label="Hora"
                value={formData.hora3}
                onChange={(value) => updateFormData("hora3", value)}
              />
              </View>
              <View style={styles.halfWidth}>
              <InputComponents
                  label="Cloro"
                  value={formData.cloro3}
                  onChangeText={(value) => updateFormData("cloro3", value)}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.halfWidth}>
              <HoraComponent
                label="Hora"
                value={formData.hora4}
                onChange={(value) => updateFormData("hora4", value)}
              />
              </View>
              <View style={styles.halfWidth}>
              <InputComponents
                  label="Cloro"
                  value={formData.cloro4}
                  onChangeText={(value) => updateFormData("cloro4", value)}
                  keyboardType="numeric"
                />
              </View>
            </View>
        </View>
      </View>

      {/* Botón de Guardado */}
      <View style={styles.buttonContainer}>
      <ButtonComponent
                buttons={[
                  {
                    title: "Guardar",
                    onPress: handleSave,
                    style: { backgroundColor: "#28A745" },
                    textStyle: { fontSize: 13 },
                  },
                ]}
              />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  titleContainer: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  section: {
    flex: 1,
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  halfWidth: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonContainer: {
    
  marginBottom:50,
    
   
  },
});

export default BitacoraMCForm;