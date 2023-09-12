import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AuthLayout from "../components/AuthLayout";
import CustomButton from "../components/CustomButton";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import CustomInput from "../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { login } from "./../redux/action";
import { useDispatch } from "react-redux";
const Auth = () => {
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [eMail, setEMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  // navigation
  const navigation = useNavigation();
  // redux
  const dispatch = useDispatch();
  // login
  const handleLogin = async (eMail: string, password: string) => {
    dispatch(login(eMail, password));
    navigation.navigate("TabStackScreen" as never);
  };

  return (
    <AuthLayout>
      <View style={styles.contentContainer}>
        {isSignUp ? (
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Do you have an account already ?<Button onPress={() => setIsSignUp(false)} color={"white"} title="Log In" />
          </Text>
        ) : (
          <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
            Don’t you have an account already ?<Button onPress={() => setIsSignUp(true)} color={"white"} title="Sign Up" />
          </Text>
        )}
        {isSignUp ? (
          <View className="space-y-4" style={styles.inputContainer}>
            <CustomInput placeholder="E-Mail" value={eMail} onChangeText={setEMail} />
            <CustomInput placeholder="Password" value={password} onChangeText={setPassword} />
            <CustomInput placeholder="Password confirm" value={passwordConfirm} onChangeText={setPasswordConfirm} />
          </View>
        ) : (
          <View className="space-y-4" style={styles.inputContainer}>
            <CustomInput placeholder="E-Mail" value={eMail} onChangeText={setEMail} />
            <CustomInput placeholder="Password" value={password} onChangeText={setPassword} />
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        {isSignUp && <CustomButton onPress={() => {}} title="Create your account" />}
        {!isSignUp && (
          <CustomButton
            onPress={() => {
              handleLogin(eMail, password);
            }}
            title="Login"
          />
        )}
      </View>
    </AuthLayout>
  );
};

export default Auth;

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: hp("5%"),
    width: wp("67%"),
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginTop: hp("5%"),
    width: wp("67%"),
  },
  buttonContainer: {
    position: "absolute",
    bottom: hp("18%"),
  },
});
