import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ButtonHelp = ({ helpText }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Botón de Ayuda */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="help-circle" size={34} color="#FFC300" />
      </TouchableOpacity>

      {/* Modal de Ayuda */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Ayuda</Text>
            <Text style={styles.modalText}>{helpText}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 10,
    top: 1,
  },
  button: {
    backgroundColor: "#444",
    padding: 8,
    borderRadius: 40,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#075E54",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
  
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 14,
    color: "#FFF",
    textAlign: "left",
    lineHeight: 20,
  },
  closeButton: {
    
    backgroundColor: "#28D146",
    paddingVertical: 10,
    borderRadius: 10,
    width: "100%", // Botón ocupa el ancho completo del modal
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  closeButtonText: {
    color: "#262626",
    fontWeight: "bold",
  },
});

export default ButtonHelp;
