import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomHeader from "../../components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import HomeAPI from "../../actions/home";
import Section1 from "../../components/Sections/Section1";
import Section2 from "../../components/Sections/Section2";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const { data: dataBanner, isLoading: isLoadingBanner } = useQuery(
    ["banner"],
    HomeAPI.banner
  );
  const { data: dataUpComing, isLoading: isLoadingHome } = useQuery(
    ["upcoming"],
    HomeAPI.home
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 4,
      }}
    >
      <CustomHeader navigation={navigation} title='Trang chủ' isHome={true} />
      <ScrollView style={{ flex: 1 }}>
        <Section1
          isLoading={isLoadingBanner}
          data={dataBanner || []}
          label='Truyện đề cử'
          navigation={navigation}
        />
        <Section2
          data={dataUpComing || []}
          label={"Truyện mới cập nhật"}
          navigation={navigation}
          isLoading={isLoadingHome}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
