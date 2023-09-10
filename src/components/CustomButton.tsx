import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress} 
    >
      <Text style={styles.buttonText}>{title}</Text> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#264061', // Arkaplan rengi
    borderRadius: 100, // Tamamen yuvarlatılmış köşeler
    paddingHorizontal: wp("12%"), // Yatayda iç boşluk
    paddingVertical: hp("2%"), // Dikeyde iç boşluk

    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Yazı rengi
    fontSize: 16, // Yazı boyutu
  },
});

export default CustomButton;
