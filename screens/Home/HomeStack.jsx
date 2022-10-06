import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { navOptionHandler } from "../../utils";
import HomeScreenDetail from "./HomeScreenDetail";
import HomeScreen from "./HomeScreen";
import ChapterScreen from "./ChapterScreen";
import ChapScreen from "./ChapScreen";
import ComboBõScreen from "./ComboBoxScreen";

const HomeStack = () => {
  const StackHome = createStackNavigator();
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        options={navOptionHandler}
        name="Home"
        component={HomeScreen}
      />
      <StackHome.Screen
        name="HomeDetail"
        options={{ ...navOptionHandler() }}
        component={HomeScreenDetail}
      />
      <StackHome.Screen
        name="HomeDetailChapter"
        options={{ ...navOptionHandler() }}
        component={ChapterScreen}
      />
      <StackHome.Screen
        name="Chap"
        options={{ ...navOptionHandler() }}
        component={ChapScreen}
      />
      <StackHome.Screen
        name="AllChap"
        options={{ ...navOptionHandler() }}
        component={ComboBõScreen}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
