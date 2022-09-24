import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import COLORS from "../../constants/color";

const HeaderSearch = ({ navigation, onChange }) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        paddingHorizontal: 8,
        alignItems: "center",
        backgroundColor: COLORS[colorScheme].background,
      }}
    >
      <FontAwesome5
        name='angle-left'
        onPress={() => navigation.goBack()}
        style={{ fontSize: 30 }}
      />
      <View
        style={{
          width: 1,
          height: 40,
          backgroundColor: "#ccc",
          marginLeft: 15,
        }}
      ></View>
      <View
        style={{
          flex: 1,
          marginLeft: 15,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder='Tìm truyện'
          onChangeText={onChange}
          style={{
            flex: 1,
            paddingHorizontal: 8,
            paddingVertical: 4,
            fontSize: 16,
          }}
        />
        <AntDesign name='search1' style={{ fontSize: 25 }} />
      </View>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({});
