import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "../../components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const ChapterScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <CustomHeader title={"Đọc truyện"} navigation={navigation} />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Chapter Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ChapterScreen;

const styles = StyleSheet.create({});
