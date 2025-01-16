// MenuScrollComponent.js
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const MenuScrollComponent = ({ onOptionSelect }) => {
  const menuOptions = [
    'Bitacora 1',
    'Bitacora 2',
    'Bitacora 3',
    'Bitacora 4',
    'Bitacora 5',
    'Bitacora 6',
    'Bitacora 7',
    'Bitacora 8',
    'Bitacora 9'
  ];
  const [activeTab, setActiveTab] = useState("");

  const handlePress = (option) => {
    setActiveTab(option);
    onOptionSelect(option);
  };
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {menuOptions.map((option, index) => (
        <TouchableOpacity 
          key={index}
          style={[
            styles.menuItem,
            activeTab === option && styles.activeMenuItem,
          ]}
          onPress={() => handlePress(option)}
        >
          <Text style={[
              styles.menuText,
              activeTab === option && styles.activeMenuText,
            ]}
          >{option}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 5,
   marginBlock:25,
    maxHeight: 80,
    marginBottom: 1,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  menuItem: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 1,
    borderWidth: 1,
    borderColor: '#454545',
    minWidth: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 100,
      borderBottomLeftRadius: 100,
  },
  activeMenuItem: {
    backgroundColor: "#25D366",
    borderColor: "#25D366",
  },
  menuText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  activeMenuText: {
    color: "#262626",
    fontWeight: "bold",
  },
});

export default MenuScrollComponent;