import React, { ReactNode } from "react";
import { View, Image, StyleSheet, SafeAreaView, Text } from "react-native";
import { overlay } from "react-native-paper";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/auth-background.png")} style={styles.backgroundImage} />

      <SafeAreaView style={styles.overlay}>
        <View style={styles.header}>
          <Image resizeMode="contain" style={{width:wp("82%"), marginLeft:wp("5%")}} source={require("../assets/spacex-logo.png")} />
          <View
            style={{
              marginTop: hp("5%"),
              width: wp("58%"),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
              Please fill out the form below to complete your profile
            </Text>
          </View>
        </View>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </View>
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
    opacity: 0.7, // İmajın saydamlığı, isteğe bağlı olarak ayarlanabilir
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(10, 14, 25, 0.92)",
  },
  header: {
    height: hp("27%"),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    flex: 1,
   alignItems: "center",
  },
});

export default AuthLayout;
