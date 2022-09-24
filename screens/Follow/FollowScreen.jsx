import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";

const FollowScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <CustomHeader title={"Theo dõi"} navigation={navigation} isHome={true} />
      <View>
        <Text>Follow Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default FollowScreen;

const styles = StyleSheet.create({});
