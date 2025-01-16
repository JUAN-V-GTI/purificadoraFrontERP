// ButtonComponent.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonComponent = ({ buttons }) => {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, button.style]}
          onPress={button.onPress}
        >
          <Text style={[styles.buttonText, button.textStyle]}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end", // Alinea los botones a la derecha
    
    marginTop:90,
  },
  button: {
 
      width: "50%", // Por defecto ocupa el 50% del ancho
      backgroundColor: "#28A745",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginLeft: 10, // Espaciado entre botones si hay varios
  },
  buttonText: {
   
      color: "#fff",
      fontWeight: "bold",
      fontSize: 14,
  },
});

export default ButtonComponent;
