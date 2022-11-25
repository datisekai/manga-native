import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import HomeAPI from "../../actions/home";
import Section1 from "../../components/Sections/Section1";
import Section2 from "../../components/Sections/Section2";
import { ScrollView } from "react-native-virtualized-view";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setHistory } from "../../redux/slices/history";
const HomeScreen = ({ navigation }) => {
  const { data: dataBanner, isLoading: isLoadingBanner } = useQuery(
    ["banner"],
    HomeAPI.banner
  );
  const { data: dataUpComing, isLoading: isLoadingHome } = useQuery(
    ["upcoming"],
    HomeAPI.home
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getStorage = async () => {
      const storage = await AsyncStorage.getItem("history");
      if (storage) {
        dispatch(setHistory(JSON.parse(storage)));
      } else {
        dispatch(setHistory({ chapters: [], comics: [] }));
      }
    };

    getStorage();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
