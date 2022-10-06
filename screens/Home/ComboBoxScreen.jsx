import { Button } from "@rneui/base";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailAPI from "../../actions/detail";
import CustomHeader from "../../components/CustomHeader";
import AllChapSkeleton from "../../components/Skeleton/AllChapSkeleton";

const ComboBoxScreen = ({ navigation, route }) => {
  const { keycolorhrefchap, href, name, totalPage, page } = route.params;
  const [stepNextPage, setStepNextPage] = useState(1);
  const [stepBackPage, setStepBackPage] = useState(totalPage);
  const limit = 20;
  const { data, isLoading, fetchPreviousPage, isFetchingPreviousPage } =
    useInfiniteQuery(
      ["allchap", href, page],
      ({ pageParam = page }) => {
        setStepBackPage(pageParam);
        if ((href, pageParam)) {
          return DetailAPI.pagination(href, pageParam, limit);
        }
      },
      {
        getPreviousPageParam: (_firstPage) => {
          if (+_firstPage.page > 0) {
            return +_firstPage.page - 1;
          } else {
            return false;
          }
        },
      }
    );
  const { fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["allchap", href, page],
    ({ pageParam = page }) => {
      setStepNextPage(pageParam);
      if ((href, pageParam)) {
        return DetailAPI.pagination(href, pageParam, limit);
      }
    },
    {
      getNextPageParam: (_lastPage) => {
        if (+_lastPage.page < _lastPage.totalPage) {
          return +_lastPage.page + 1;
        } else {
          return false;
        }
      },
    }
  );
  const dataSection = useMemo(() => {
    let dataArray = [];
    data?.pages?.forEach((item) => {
      dataArray = [...dataArray, ...item.chapters];
    });
    return dataArray;
  }, [data]);
  return (
    <SafeAreaView>
      <CustomHeader navigation={navigation} title={"Chọn tập"} />
      {isLoading ? (
        <AllChapSkeleton />
      ) : (
        <ScrollView
          contentContainerStyle={{
            paddingTop: 10,
          }}
        >
          {stepBackPage > 1 ? (
            <Button
              title={"Xem thêm các tập mới"}
              onPress={fetchPreviousPage}
            />
          ) : (
            ""
          )}
          {isFetchingPreviousPage && <Text>Loading....</Text>}
          <FlatList
            data={dataSection}
            numColumns={2}
            style={{ minHeight: 300 }}
            // onStartReached={stepBackPage > 1 ? fetchPreviousPage : ""}
            // onEndReached={stepNextPage < totalPage ? fetchNextPage : ""}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  key={item.href}
                  onPress={() =>
                    navigation.navigate("Chap", {
                      href: item.href,
                      id: href,
                      name: name,
                      namechap: item.name,
                      vitri: index % 20,
                      page: Math.ceil((index + 1) / 20),
                    })
                  }
                >
                  <View
                    style={{
                      paddingVertical: 24,
                      paddingHorizontal: 4,
                      marginBottom: 10,
                      marginLeft: 5,
                      width: Dimensions.get("window").width / 2 - 7,
                      borderRadius: 5,
                      borderColor: "black",
                      borderWidth: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: keycolorhrefchap === item.href ? "red" : "black",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.href}
          />
          {isFetchingNextPage && <Text>Loading....</Text>}
          {stepNextPage < totalPage ? (
            <Button title={"Xem thêm các tập cũ"} onPress={fetchNextPage} />
          ) : (
            ""
          )}

          <View style={{ marginBottom: 50 }}></View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ComboBoxScreen;

const styles = StyleSheet.create({});
