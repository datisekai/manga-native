import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";
import { useQuery } from "@tanstack/react-query";
import DetailAPI from "../../actions/detail";
import { getImage, getImageDetail } from "../../utils";
import { SafeAreaView } from "react-native-safe-area-context";

const ChapScreen = ({ navigation, route }) => {
  const { href } = route.params;

  const { data, isLoading } = useQuery(["chap", href], () => {
    if (href) {
      return DetailAPI.chap(href);
    }
  });

  useEffect(() => {
    if (data) {
      console.log(getImageDetail(getImage(data[0].img)));
    }
  }, [data]);

  return (
    <SafeAreaView>
      <CustomHeader title={"Đọc truyện"} navigation={navigation} />
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.img}
          renderItem={({ item }) => (
            <Image
              key={item.img}
              style={{
                width: "100%",
                aspectRatio: 320 / 455,
                marginTop: 4,
                resizeMode: "contain",
              }}
              source={{ uri: getImageDetail(getImage(item.img)) }}
            />
          )}
        />
        {/* {data?.map((item) => (
          <Image
            key={item.img}
            style={{ width: "100%", aspectRatio: 320 / 700, marginTop: 4 }}
            source={{ uri: getImageDetail(getImage(item.img)) }}
          />
        ))} */}
        {isLoading && <Text>Loading...</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChapScreen;

const styles = StyleSheet.create({});
