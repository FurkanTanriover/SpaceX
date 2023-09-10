import React, { ReactNode } from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/background.png")} style={styles.backgroundImage} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C101A", // Arkaplan rengi
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: wp("100%"),
    height: hp("100%"),
    opacity: 1, // İmajın saydamlığı, isteğe bağlı olarak ayarlanabilir
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Layout;
