import React from "react";
import { Avatar } from "react-native-paper";
import { StyleSheet } from "react-native";

interface CustomAvatarProps {
  source: string; // Avatar görselinin kaynağı (örneğin, URL veya yerel yol)
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ source }) => {
  return (
    <Avatar.Image
      source={{ uri: source }} // Avatar görselinin kaynağını dışarıdan alır
      size={60} // Avatar boyutu (isteğe bağlı olarak ayarlayabilirsiniz)
      style={styles.avatar}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    shadowColor: "#ffffff", // Gölge rengi
    backgroundColor:"#36445B",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3, // Gölge opaklığı
    shadowRadius: 16, // Gölge yarıçapı
    elevation: 4, // Gölge
  },
});

export default CustomAvatar;
