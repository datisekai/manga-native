import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../../components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingScreenDetail = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <CustomHeader navigation={navigation} title={"Setting"} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings Detail!</Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreenDetail;

const styles = StyleSheet.create({});
