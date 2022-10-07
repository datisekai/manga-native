import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import { useDispatch, useSelector } from "react-redux";
import DetailAPI from "../../actions/detail";
import ComboBoxCustom from "../../components/ComboBoxCustom";
import CustomHeader from "../../components/CustomHeader";
import Headerchitiettruyenc from "../../components/Headerchitiettruyenc";
import ChapSkeleton from "../../components/Skeleton/ChapSkeleton";
import { setChapter } from "../../redux/slices/history";
import { getImage, getImageDetail } from "../../utils";
import AutoHeightImage from "react-native-auto-height-image";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ChapScreen = ({ navigation, route }) => {
  //id là href để gọi all chap
  //href là href để gọi chap
  //tên truyện: name
  //tên chap: namechap
  const { chapters, comics } = useSelector((state) => state.history);

  const { href, id, name, namechap, vitri, page } = route.params;
  const limit = 20;
  const { data: dataAllChaps } = useQuery(["allchaps", id, page], () => {
    if ((id, page)) {
      return DetailAPI.pagination(id, page, limit);
    }
  });
  const { data: dataAllChapsNext } = useQuery(
    ["allchaps", id, page - 1],
    () => {
      if ((id, page)) {
        return DetailAPI.pagination(id, page - 1, limit);
      }
    }
  );
  const { data: dataAllChapsBack } = useQuery(
    ["allchaps", id, page + 1],
    () => {
      if ((id, page)) {
        return DetailAPI.pagination(id, page + 1, limit);
      }
    }
  );
  const { data, isLoading } = useQuery(["chap", href], () => {
    if (href) {
      return DetailAPI.chap(href);
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const handleStorage = async () => {
      const isExist = chapters?.some((item) => item === id);
      if (!isExist) {
        const arrayTest = [...chapters, href];
        await AsyncStorage.setItem(
          "history",
          JSON.stringify({ comics, chapters: [...chapters, href] })
        );

        dispatch(setChapter(arrayTest));
      }
    };

    if (href) {
      handleStorage();
    }
  }, [href]);
  return (
    <SafeAreaView>
      <CustomHeader navigation={navigation} title={"Chi tiết truyện"} />
      {isLoading ? (
        <ChapSkeleton />
      ) : (
        <ScrollView contentContainerStyle={{ paddingBottom: 50, zIndex: 1 }}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index}
            ListHeaderComponent={
              <>
                <Headerchitiettruyenc name={name} namechap={namechap} />
                <ComboBoxCustom
                  hrefkey={href}
                  id={id}
                  name={name}
                  namechap={namechap}
                  vitri={vitri}
                  page={page}
                  dataAllChaps={dataAllChaps}
                  dataAllChapsBack={dataAllChapsBack}
                  dataAllChapsNext={dataAllChapsNext}
                  navigation={navigation}
                />
              </>
            }
            ListFooterComponent={
              <ComboBoxCustom
                hrefkey={href}
                id={id}
                name={name}
                namechap={namechap}
                vitri={vitri}
                page={page}
                dataAllChaps={dataAllChaps}
                dataAllChapsBack={dataAllChapsBack}
                dataAllChapsNext={dataAllChapsNext}
                navigation={navigation}
              />
            }
            renderItem={({ item }) => (
              // <Image
              //   key={item.img}
              //   style={{
              //     width: "100%",
              //     aspectRatio: 320 / 455,
              //     marginBottom: 4,
              //     resizeMode: "contain",
              //   }}
              //   source={{ uri: getImageDetail(getImage(item.img)) }}
              // />
              <AutoHeightImage
                source={{ uri: getImageDetail(getImage(item.img)) }}
                width={windowWidth}
              />
            )}
          />
          <View style={{ marginBottom: 40 }}></View>
          {/* {data?.map((item) => (
          <Image
            key={item.img}
            style={{ width: "100%", aspectRatio: 320 / 700, marginTop: 4 }}
            source={{ uri: getImageDetail(getImage(item.img)) }}
          />
        ))} */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ChapScreen;

const styles = StyleSheet.create({});
