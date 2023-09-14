import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import Auth from "../screens/Auth";
import Home from "../screens/Home";
import { Image } from "react-native";
import Schedule from "../screens/Schedule";
import Launch from "../screens/Launch";
import Settings from "../screens/Settings";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { loadToken } from "../utils/storage";
import { useSelector } from "react-redux";

type RootStackParamList = {
  Auth: undefined;
  TabStackScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabStackScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Schedule") {
            iconName = require("../assets/schedule.png");
          } else if (route.name === "Home") {
            iconName = require("../assets/home.png");
          } else if (route.name === "Launch") {
            iconName = require("../assets/launch.png");
          } else if (route.name === "Settings") {
            iconName = require("../assets/settings.png");
          }
          return (
            <Image
              source={iconName}
              style={{
                width: hp(3),
                tintColor: focused ? "white" : color,
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarStyle: {
          showLabel: false,
          position: "absolute",
          paddingTop: hp(4),
          bottom: wp(6),
          left: wp(5),
          right: wp(5),
          elevation: 0,
          backgroundColor: "rgba(38, 64, 97, 0.95)",
          borderRadius: 12,
          height: hp(9),
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Launch" component={Launch} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const Screens = () => {
  const [token, setToken] = useState<string | null>(null);
  console.log("token", token);
  useEffect(() => {
    loadToken().then((userToken) => {
      setToken(userToken);
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName={"Auth"} screenOptions={{ headerShown: false }}>
      {!token && <Stack.Screen name="Auth" component={Auth} />}
      <Stack.Screen name="TabStackScreen" component={TabStackScreen} />
    </Stack.Navigator>
  );
};

export default Screens;
