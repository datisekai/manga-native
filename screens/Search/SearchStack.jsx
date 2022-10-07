import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchScreen from "./SearchScreen";
import SearchCategory from "./SearchCategory";
import { createStackNavigator } from "@react-navigation/stack";
import { navOptionHandler } from "../../utils";

const SearchStack = () => {
  const StackHome = createStackNavigator();
  return (
    <StackHome.Navigator initialRouteName='Search'>
      <StackHome.Screen
        options={navOptionHandler}
        name='Search'
        component={SearchScreen}
      />
      {/* <StackHome.Screen
        name='SearchCategory'
        options={{ ...navOptionHandler() }}
        component={SearchCategory}
      /> */}
    </StackHome.Navigator>
  );
};

export default SearchStack;

const styles = StyleSheet.create({});
