import React from "react";
import { View, TextInput, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface CustomInputProps {
  placeholder: string;
  icon?: string;
  style?: StyleProp<ViewStyle>;
  value: string; // Yeni eklenen value prop'u
  onChangeText: (text: string) => void; // Değişiklikleri dinleyecek bir fonksiyon
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, icon, style, value, onChangeText }) => {
  return (
    <View style={[styles.container, style]}>
      {icon && <></>}
      <TextInput  value={value} onChangeText={onChangeText} placeholder={placeholder} style={styles.input} placeholderTextColor="#36445B" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#36445B",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: "white",
  },
});

export default CustomInput;
