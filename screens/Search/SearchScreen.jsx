import { TextInput } from "@react-native-material/core";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchAPI from "../../actions/search";
import Section2 from "../../components/Sections/Section2";
import useDebounce from "../../hooks/useDebounce";
import HeaderSearch from "./HeaderSearch";

const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 500);

  const handleChangSearch = (text) => {
    setSearch(text);
  };

  const { data, isLoading } = useQuery(["search", debounceSearch], async () => {
    if (debounceSearch.length > 0) {
      return await SearchAPI.keyword(debounceSearch);
    }
  });

  return (
    <SafeAreaView>
      {/* <CustomHeader title={"Tìm kiếm"} navigation={navigation} isHome={true} /> */}
      <HeaderSearch navigation={navigation} onChange={handleChangSearch} />
      <View style={{ paddingHorizontal: 4, marginTop: 16 }}>
        {debounceSearch && (
          <Text style={{ fontSize: 16, paddingBottom: 4 }}>
            Kết quả với từ khóa &quot;{debounceSearch}&quot;
          </Text>
        )}
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <Section2
            data={data?.data || []}
            navigation={navigation}
            isLoading={isLoading}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
