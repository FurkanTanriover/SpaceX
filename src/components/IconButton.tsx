import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // İstediğiniz başka bir ikon kitaplığı kullanabilirsiniz
import { MaterialIcons } from '@expo/vector-icons'; 

const IconButton = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialIcons name={name} size={24} color={"white"}/> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50, 
    padding: 10
  },
});

export default IconButton;
