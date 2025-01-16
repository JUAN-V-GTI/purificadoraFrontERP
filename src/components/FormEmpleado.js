import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import DatePickerInput from "./ComponetsForm/DatePickerInput";
import RoleSelectorInput from "./ComponetsForm/RoleSelectorInput";
import PhotoSelectorInput from "./ComponetsForm/PhotoSelectorInput";
import InputComponents from "./ComponetsForm/InputComponets";
import ButtonComponent from "./ComponetsForm/ButtonComponent";
const FormEmpleado = ({ onSave }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    estado: "",
    colonia: "",
    calle: "",
    numInt: "",
    cPostal: "",
    telefonoCelular: "",
    telefonoAlt: "",
    fechaIngreso: "",
    numeroSS: "",
    numeroCuenta: "",
    curp: "",
    rol: "",
    imagen: null,
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Función para formatear el número de cuenta
  const formatAccountNumber = (value) => {
    const numericValue = value.replace(/[^0-9]/g, ""); // Elimina caracteres no numéricos
    return numericValue.replace(/(\d{4})(?=\d)/g, "$1 "); // Inserta un espacio cada 4 dígitos
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
              <InputComponents
                label="Nombre"
                value={formData.nombre}
                onChangeText={(value) => updateFormData("nombre", value)}
              />
            </View>

            <View style={styles.fieldContainer}>
              <InputComponents
                label="Apellido Paterno"
                value={formData.apellidoPaterno}
                onChangeText={(value) =>
                  updateFormData("apellidoPaterno", value)
                }
              />
            </View>

            <View style={styles.fieldContainer}>
              <InputComponents
                label="Apellido Materno"
                value={formData.apellidoMaterno}
                onChangeText={(value) =>
                  updateFormData("apellidoMaterno", value)
                }
              />
            </View>

            <View style={styles.fieldContainer}>
              <InputComponents
                label="Estado"
                value={formData.estado}
                onChangeText={(value) => updateFormData("estado", value)}
              />
            </View>

            <View style={styles.fieldContainer}>
              <InputComponents
                label="Colonia"
                value={formData.colonia}
                onChangeText={(value) => updateFormData("colonia", value)}
              />
            </View>

            <View style={styles.fieldContainer}>
              <InputComponents
                label="Calle"
                value={formData.calle}
                onChangeText={(value) => updateFormData("calle", value)}
              />
            </View>
          </View>

          {/* Columna Derecha */}
          <View style={styles.column}>
            <View style={styles.row}>
              <View style={styles.halfField}>
                <InputComponents
                  label="Número Interior"
                  value={formData.numInt}
                  onChangeText={(value) => updateFormData("numInt", value)}
                />
              </View>
              <View style={styles.halfField}>
                <InputComponents
                  label="Código Postal"
                  value={formData.cPostal}
                  onChangeText={(value) => updateFormData("cPostal", value)}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.halfField}>
                <RoleSelectorInput
                  label="Rol"
                  value={formData.rol}
                  onChange={(value) => updateFormData("rol", value)}
                />
              </View>
              <View style={styles.halfField}>
                <DatePickerInput
                  label="Fecha de Ingreso"
                  value={formData.fechaIngreso}
                  onChange={(value) => updateFormData("fechaIngreso", value)}
                />
              </View>
            </View>

            <View style={styles.fieldContainer}>
              <PhotoSelectorInput
                label="Foto"
                value={formData.imagen}
                onChange={(value) => updateFormData("imagen", value)}
              />
            </View>

            <View style={styles.row}>
              <View style={styles.halfField}>
                <InputComponents
                  label="Número de Seguridad Social"
                  value={formData.numeroSS}
                  onChangeText={(value) => updateFormData("numeroSS", value)}
                />
              </View>
              <View style={styles.halfField}>
                <InputComponents
                  label="CURP"
                  value={formData.curp}
                  onChangeText={(value) => updateFormData("curp", value)}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.halfField}>
                <InputComponents
                  label="Teléfono Celular"
                  value={formData.telefonoCelular}
                  onChangeText={(value) =>
                    updateFormData("telefonoCelular", value)
                  }
                  keyboardType="phone-pad" // Teclado para teléfonos
                  maxLength={10}
                />
              </View>
              <View style={styles.halfField}>
                <InputComponents
                  label="Teléfono Alternativo"
                  value={formData.telefonoAlt}
                  onChangeText={(value) => updateFormData("telefonoAlt", value)}
                  keyboardType="phone-pad" // Teclado para teléfonos
                  maxLength={10}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.halfField}>
                <InputComponents
                  label="Número de Cuenta"
                  value={formData.numeroCuenta}
                  onChangeText={(value) =>
                    updateFormData("numeroCuenta", value)
                  }
                  keyboardType="numeric"
                  maxLength={19} // Máximo de 16 dígitos + 3 espacios
                  formatFunction={formatAccountNumber} // Función de formateo
                />
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              {/* Botones */}
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
  buttonWrapper: {
    flex: 1, // Ocupa el espacio disponible
    justifyContent: "flex-end", // Alinea el botón al final (derecha)
    alignItems: "flex-end", // Alinea el contenido hacia la derecha
  },
});

export default FormEmpleado;
