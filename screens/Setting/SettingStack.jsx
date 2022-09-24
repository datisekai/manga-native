import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { navOptionHandler } from "../../utils";
import SettingScreenDetail from "./SettingScreenDetail";
import SettingScreen from "./SettingScreen";

const SettingStack = () => {
  const StackSetting = createStackNavigator();

  return (
    <StackSetting.Navigator initialRouteName='Setting'>
      <StackSetting.Screen
        name='Setting'
        options={navOptionHandler}
        component={SettingScreen}
      />
      <StackSetting.Screen
        name='SettingDetail'
        options={navOptionHandler}
        component={SettingScreenDetail}
      />
    </StackSetting.Navigator>
  );
};

export default SettingStack;

const styles = StyleSheet.create({});
