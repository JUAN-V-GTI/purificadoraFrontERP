import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import InputComponents from "../components/ComponetsForm/InputComponets";
import TimeRangeInput from "../components/ComponetsForm/TimeRangeInput";
import ButtonComponent from "./ComponetsForm/ButtonComponent";
import FrecuenciaSelectorInput from "./ComponetsForm/FrecuenciaComponent";
import ButtonSearchComponent from "./ComponetsForm/ButtonSearchComponents";
const FormNomina = ({ onSave, onSearch }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    sueldo: "",
    comision: "",
    ventas: "",
    horario: "",
    frecuenciaPago: "",
    comisionDia: "",
    comisionSemanal: "",
  });

  const [searchText, setSearchText] = useState("");

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

  const handleSearch = () => {
    onSearch?.(searchText);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.formContainer}>
        {/* Formulario */}
        <View style={styles.twoColumnLayout}>
          {/* Columna Izquierda */}
          <View style={styles.column}>

          <View style={styles.fieldContainer}>
          <InputComponents
              label="Buscar"
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Ingrese Nombre del empleado"
            />
        
            </View>
            <View style={styles.fieldContainer}>
              <InputComponents
                label="Nombre"
                value={formData.nombre}
                onChangeText={(value) => updateFormData("nombre", value)}
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

            <View style={styles.fieldContainer}>
              <InputComponents
                label="Ventas"
                value={formData.ventas}
                onChangeText={(value) => updateFormData("ventas", value)}
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Columna Derecha */}
          <View style={styles.column}>
          <View style={styles.fieldContainer}>
              <View style={styles.fieldContainer}>
              <ButtonSearchComponent
            buttons={[
              {
                title: "Buscar",
                onPress: handleSearch,
              },
            ]}
          />
            </View>
            </View>
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

            <View style={styles.row}>
              <View style={styles.halfField}>
                <InputComponents
                  label="Comisión del día"
                  value={formData.comisionDia}
                  onChangeText={(value) =>
                    updateFormData("comisionDia", value)
                  }
                  keyboardType="numeric"
                  formatFunction={formatMoney} // Pasa la función de formateo
                  maxLength={10}
                />
              </View>
              <View style={styles.halfField}>
                <InputComponents
                  label="Comisión Semanal"
                  value={formData.comisionSemanal}
                  onChangeText={(value) =>
                    updateFormData("comisionSemanal", value)
                  }
                  keyboardType="numeric"
                  formatFunction={formatMoney} // Pasa la función de formateo
                />
              </View>
            </View>

            <ButtonComponent
              buttons={[
                {
                  title: "Guardar",
                  onPress: handleSave,
                },
              ]}
            />
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
    marginBottom: 15,
    width: "100%",
  },
});

export default FormNomina;
