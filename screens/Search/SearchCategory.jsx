import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";
import SearchAPI from "../../actions/search";
import { useQuery } from "@tanstack/react-query";
import Section2 from "../../components/Sections/Section2";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";

const SearchCategory = ({ navigation, route }) => {
  const { name, id } = route.params;

  const { data, isLoading } = useQuery(["searchCategory", name], () => {
    if (name) {
      return SearchAPI.category(name);
    }
  });

  return (
    <SafeAreaView>
      <CustomHeader title={name || "Thể loại"} navigation={navigation} />
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <Section2
          data={data?.data || []}
          navigation={navigation}
          isLoading={isLoading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchCategory;

const styles = StyleSheet.create({});
