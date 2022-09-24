import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../constants/color";

const CustomHeader = ({ title, isHome = false, navigation }) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        paddingHorizontal: 8,
        backgroundColor: COLORS[colorScheme].background,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name='align-left' style={{ fontSize: 25 }} />
          </TouchableOpacity>
        ) : (
          <FontAwesome5
            name='angle-left'
            onPress={() => navigation.goBack()}
            style={{ fontSize: 30 }}
          />
        )}
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1.5,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18 }}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        {/* <TouchableOpacity onPress={() => navigation.navigate("follows")}>
          <AntDesign name='hearto' style={{ fontSize: 28 }} />
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("searchs")}>
          <AntDesign name='search1' style={{ fontSize: 30, marginLeft: 15 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
