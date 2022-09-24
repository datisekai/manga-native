import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import CustomHeader from "../../components/CustomHeader";

const HistoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <CustomHeader title={"Lịch sử"} navigation={navigation} isHome={true} />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>History Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
