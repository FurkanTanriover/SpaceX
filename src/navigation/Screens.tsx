import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Auth from "../screens/Auth";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();
const Screens = () => {
  return (
    <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default Screens;
