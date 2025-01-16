import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const ModalComponent = ({ isVisible, data, onClose, onSelect }) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.modalItem, item.isHeader && styles.modalHeader]}
                onPress={() => onSelect(item)}
              >
                <Text
                  style={[
                    styles.modalItemText,
                    item.isHeader && styles.modalHeaderText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={onClose}
          >
            <Text style={styles.modalCloseButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#2D2D2D',
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  modalItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#3D3D3D',
  },
  modalHeader: {
    backgroundColor: '#1E1E1E',
  },
  modalItemText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  modalHeaderText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  modalCloseButton: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#E6A23C',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ModalComponent;
