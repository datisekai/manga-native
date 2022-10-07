import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { navOptionHandler } from "../../utils";
import SearchCategory from "../Search/SearchCategory";
import CategoryScreen from "./CategoryScreen";

const CategoryStack = () => {
  const StackHome = createStackNavigator();
  return (
    <StackHome.Navigator initialRouteName='category'>
      <StackHome.Screen
        options={navOptionHandler}
        name='category'
        component={CategoryScreen}
      />
      <StackHome.Screen
        name='searchCategory'
        options={{ ...navOptionHandler() }}
        component={SearchCategory}
      />
    </StackHome.Navigator>
  );
};

export default CategoryStack;

const styles = StyleSheet.create({});
