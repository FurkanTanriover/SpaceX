import React from "react";
import { View, TextInput, StyleSheet, StyleProp, ViewStyle, TouchableOpacity, Image } from "react-native";
import IconButton from "./IconButton";
interface CustomInputProps {
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, style, value, onChangeText, isPassword }) => {
  const [isSecure, setIsSecure] = React.useState(isPassword); // İlk başta isPassword prop'unun değerine göre başlat

  const toggleSecureTextEntry = () => {
    setIsSecure((prevIsSecure) => !prevIsSecure); // Mevcut durumu tersine çevir
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#36445B"
        secureTextEntry={isSecure} // secureTextEntry özelliğini isSecure'a göre ayarla
      />
      {isPassword && (
        <View>
          <IconButton
            name={isSecure ? "eye" : "eye-off"}
            onPress={() => {
              toggleSecureTextEntry();
            }}
          />
        </View>
      )}
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
    width: 24, // Görünür/Görünmez simge boyutunu ayarlayabilirsiniz
    height: 24,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: "white",
  },
});

export default CustomInput;
