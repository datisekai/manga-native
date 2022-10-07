import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import { useQuery } from "@tanstack/react-query";
import HomeAPI from "../../actions/home";
import Section2 from "../../components/Sections/Section2";
import { ScrollView } from "react-native-virtualized-view";

const HotScreen = ({ navigation }) => {
  const { data, isLoading } = useQuery(["hot"], HomeAPI.hot);
  return (
    <SafeAreaView>
      <CustomHeader title={"Hot"} navigation={navigation} isHome={true} />
      <ScrollView>
        <Section2
          data={data || []}
          navigation={navigation}
          isLoading={isLoading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotScreen;

const styles = StyleSheet.create({});
