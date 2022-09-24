import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomHeader from "../../components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <CustomHeader navigation={navigation} title={"Setting"} isHome={true} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SettingDetail")}>
          <Text>Go Settings Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
