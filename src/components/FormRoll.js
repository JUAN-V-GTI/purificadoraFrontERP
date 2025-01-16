import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import InputComponents from "../components/ComponetsForm/InputComponets";
import RoleSelectorInput from "../components/ComponetsForm/RoleSelectorInput";
import TimeRangeInput from "../components/ComponetsForm/TimeRangeInput";
import ButtonComponent from "./ComponetsForm/ButtonComponent";
import FrecuenciaSelectorInput from "./ComponetsForm/FrecuenciaComponent";
import EstadoSelectorInput from "./ComponetsForm/EstatusComponets";
const FormNomina = ({ onSave }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    sueldo: "",
    comision: "",
    horario: "",
    frecuenciaPago: "",
    estado:"",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const formatMoney = (value) => {
    const numericValue = value.replace(/[^0-9]/g, ""); // Elimina caracteres no numéricos
    return `$${Number(numericValue).toLocaleString()}`; // Formatea como dinero
  };
  const handleSave = () => {
    onSave?.(formData);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.formContainer}>
        <View style={styles.twoColumnLayout}>
          {/* Columna Izquierda */}
          <View style={styles.column}>
            <View style={styles.fieldContainer}>
            <RoleSelectorInput
                  label="Rol"
                  value={formData.rol}
                  onChange={(value) => updateFormData("rol", value)}
                />
            </View>

            <View style={styles.fieldContainer}>
              <InputComponents
                label="Sueldo"
                value={formData.sueldo}
                onChangeText={(value) => updateFormData("sueldo", value)}
                keyboardType="numeric"
                formatFunction={formatMoney} // Pasa la función de formateo
              />
            </View>

            <View style={styles.fieldContainer}>
              <InputComponents
                label="Comisión"
                value={formData.comision}
                onChangeText={(value) => updateFormData("comision", value)}
                keyboardType="numeric"
                formatFunction={formatMoney} // Pasa la función de formateo
              />
            </View>
          </View>

          {/* Columna Derecha */}
          <View style={styles.column}>
            <View style={styles.fieldContainer}>
              <TimeRangeInput
                label="Horario"
                value={formData.horario}
                onChange={(value) => updateFormData("horario", value)}
              />
            </View>

            <View style={styles.fieldContainer}>
            <FrecuenciaSelectorInput
                  label="Frecuencia de pago"
                  value={formData.frecuenciaPago}
                  onChange={(value) => updateFormData("frecuenciaPago", value)}
                />
            </View>
            <View style={styles.fieldContainer}>
            <EstadoSelectorInput
                  label="Estatus"
                  value={formData.estado}
                  onChange={(value) => updateFormData("estado", value)}
                />
            </View>
            <View style={styles.buttonRow}>
  <ButtonComponent
    buttons={[
      {
        title: "Editar",
        onPress: handleSave,
        style: styles.button1, // Aplica el estilo centralizado
        textStyle: { fontSize: 14 },
      },
    ]}
  />
  <ButtonComponent
    buttons={[
      {
        title: "Guardar",
        onPress: handleSave,
        style: styles.button, // Aplica el estilo centralizado
        textStyle: { fontSize: 14 },
      },
    ]}
  />
</View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#1B1B1B",
  },
  formContainer: {
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  twoColumnLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  column: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 15,
  },
  halfField: {
    flex: 1,
  },
  fieldContainer: {
    marginBottom: 1,
    width: "100%",
  },
  buttonRow: {
    flexDirection: "row", // Alinea los botones en fila
    justifyContent: 'flex-end', // Espacia los botones proporcionalmente
   marginBottom:10,
    
  },
  button: {
    marginHorizontal: 1, // Espaciado pequeño entre botones
    backgroundColor: "#28A745", // Color de fondo predeterminado
    padding: 12, // Aumenta el tamaño del botón
    borderRadius: 5, // Bordes redondeados
    alignItems: "center", // Centra el texto dentro del botón
  },
  button1: {
    marginHorizontal: 1, // Espaciado pequeño entre botones
    backgroundColor: "#ff9800", // Color de fondo predeterminado
    padding: 12, // Aumenta el tamaño del botón
    borderRadius: 5, // Bordes redondeados
    alignItems: "center", // Centra el texto dentro del botón
  },
});

export default FormNomina;
