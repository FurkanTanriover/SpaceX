import React, { ReactNode } from "react";
import { View, Image, StyleSheet, SafeAreaView, Text, Button } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import CustomAvatar from "./Avatar";
import { useDispatch } from "react-redux";
import { deleteToken } from "../redux/action";
import { useNavigation } from "@react-navigation/native";
import IconButton from "./IconButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleLogout = async () => {
    dispatch(deleteToken());
    navigation.navigate("Auth" as never); 
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/background.png")} style={styles.backgroundImage} />
      <View style={styles.welcomeContainer}>
        <CustomAvatar source="https://i.pravatar.cc/300" />
        <View className="space-y-2" style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", marginLeft: wp("5%") }}>Furkan Tanrıöver</Text>
          <Text style={{ color: "white", fontSize: 12, marginLeft: wp("5%") }}>Welcome to SpaceX Tracker</Text>
        </View>
        <View>
          <IconButton
            name="log-out"
            onPress={() => {
              handleLogout();
            }}
          />
        </View>
      </View>
      <View style={styles.content}>{children}</View>
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
    opacity: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  welcomeContainer: {
    marginTop: hp("2%"),
    height: hp("12%"),
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
});

export default Layout;
