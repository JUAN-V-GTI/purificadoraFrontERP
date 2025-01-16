import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

const MenuScrollComponent = ({ onOptionSelect }) => {
  const menuOptions = [
    "Cloro",
    "PH",
    "Dureza",
    "Agua Cruda",
    "Agua Purificada",
    "Resumen",
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
          <Text
            style={[
              styles.menuText,
              activeTab === option && styles.activeMenuText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    padding: 5,
    marginBottom: 25,
    maxHeight: 60,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  menuItem: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#454545",
    minWidth: 150,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  activeMenuItem: {
    backgroundColor: "#25D366",
    borderColor: "#25D366",
  },
  menuText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  activeMenuText: {
    color: "#1a1a1a",
    fontWeight: "bold",
  },
});

export default MenuScrollComponent;
