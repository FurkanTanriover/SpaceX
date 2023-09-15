import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "../components/AuthLayout";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { login, register } from "./../redux/action";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [eMail, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const isAuth = useSelector((state) => state.reducer.isAuth);
  const isRegisterSuccess = useSelector((state) => state.reducer.isRegisterSuccess);

  useEffect(() => {
    isAuth && navigation.navigate("TabStackScreen" as never);
  }, [isAuth]);

  // navigation
  const navigation = useNavigation();
  // redux
  const dispatch = useDispatch();

  const showPasswordDoNotMatchAlert = async () => {
    await Toast.show({
      type: "error",
      text1: "Password do not match",
    });
  };

  const showInvalidEmailAlert = async () => {
    await Toast.show({
      type: "error",
      text1: "Invalid email address",
    });
  };

  const handleLogin = async () => {
    await dispatch(login(eMail, password));
  };

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      showPasswordDoNotMatchAlert();
    } else if (!isValidEmail(eMail)) {
      showInvalidEmailAlert();
    } else {
      await dispatch(register(eMail, password));
      if (isRegisterSuccess) {
        setIsSignUp(false);
        setEMail("");
        setPassword("");
        setPasswordConfirm("");
      }
    }
  };

  // E-posta doğrulama işlemi
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return emailRegex.test(email);
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
            <CustomInput isPassword placeholder="Password" value={password} onChangeText={setPassword} />
            <CustomInput isPassword placeholder="Password confirm" value={passwordConfirm} onChangeText={setPasswordConfirm} />
          </View>
        ) : (
          <View className="space-y-4" style={styles.inputContainer}>
            <CustomInput placeholder="E-Mail" value={eMail} onChangeText={setEMail} />
            <CustomInput isPassword placeholder="Password" value={password} onChangeText={setPassword} />
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        {isSignUp ? (
          <CustomButton onPress={handleRegister} title="Create your account" />
        ) : (
          <CustomButton onPress={handleLogin} title="Login" />
        )}
      </View>
    </AuthLayout>
  );
};

export default Auth;

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: hp("5%"),
    width: wp("75%"),
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
