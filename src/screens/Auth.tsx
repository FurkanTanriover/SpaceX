import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "../components/AuthLayout";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { login, register } from "./../redux/action";
import Toast from "react-native-toast-message";

const Auth = () => {
  let [isSignUp, setIsSignUp] = React.useState(false);
  const [eMail, setEMail] = React.useState("");
  const isAuth = useSelector((state) => state.reducer.isAuth);
  console.log("isauth", isAuth);

  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  useEffect(() => {
    console.log("isAuth2", isAuth);
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
  // login
  const handleLogin = async (eMail: string, password: string) => {
    await dispatch(login(eMail, password));
  };
  // register
  const handleRegister = async (eMail: string, password: string, passwordConfirm: string) => {
    if (password !== passwordConfirm) {
      showPasswordDoNotMatchAlert();
    } else {
      await dispatch(register(eMail, password));
      
    }
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
        {isSignUp && (
          <CustomButton
            onPress={() => {
              handleRegister(eMail, password, passwordConfirm);
            }}
            title="Create your account"
          />
        )}
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
