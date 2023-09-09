import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomLayout from "./src/components/CustomLayout";
import AppNavigator from "./src/navigation/App";

export default function App(): JSX.Element {
  return <AppNavigator />;
}
