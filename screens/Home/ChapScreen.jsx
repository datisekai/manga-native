import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailAPI from "../../actions/detail";
import CustomHeader2 from "../../components/CustomHeader2";
import { getImage, getImageDetail } from "../../utils";

const ChapScreen = ({ navigation, route }) => {
  const { href, id, name, namechap } = route.params;
  const { data: data2 } = useQuery(["allchaps", id], () => {
    if (id) {
      return DetailAPI.allchap(id);
    }
  });
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
      <CustomHeader2
        namechap={namechap}
        data2={data2}
        name={name}
        id={id}
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 50, zIndex: 1 }}>
        <View>
          <Text style={{ fontSize: 20, marginVertical: 10 }}>
            {name} - {namechap}
          </Text>
        </View>
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
