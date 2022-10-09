import { AntDesign } from "@expo/vector-icons";
import { Button, Stack } from "@react-native-material/core";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  LogBox,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import DetailAPI from "../../actions/detail";
import CustomHeader from "../../components/CustomHeader";
import DetailSkeleton from "../../components/Skeleton/DetailSkeleton";
import { setComic } from "../../redux/slices/history";
import { getImage } from "../../utils";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreenDetail = ({ navigation, route }) => {
  const { href, name } = route.params;
  const [page, setPage] = useState(1);
  const [dataRender, setDataRender] = useState([]);
  const limit = 10;

  const flatRef = useRef();

  const { chapters, comics } = useSelector((state) => state.history);

  const dispatch = useDispatch();

  const { data, isLoading } = useQuery(["detail", href], () => {
    if (href) {
      return DetailAPI.detail(href);
    }
  });

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, [data]);

  useEffect(() => {
    const handleStorage = async () => {
      if (data) {
        const isExist = comics.some((item) => item.href === href);
        if (!isExist) {
          dispatch(
            setComic([
              ...comics,
              { name: data.name, href: href, img: data.img },
            ])
          );
          await AsyncStorage.setItem(
            "history",
            JSON.stringify({
              chapters,
              comics: [
                ...comics,
                { name: data.name, href: href, img: data.img },
              ],
            })
          );
        }
      }
    };

    handleStorage();
  }, [data]);

  useEffect(() => {
    if (data) {
      const start = (page - 1) * limit;
      const end = page * limit;
      const dataChapterNew = data.chapters.slice(start, end);
      setDataRender(dataChapterNew);
    }
  }, [data]);

  const handleNextMore = () => {
    if (page * limit < data.chapters.length) {
      const start = page * limit;
      const end = (page + 1) * limit;
      const dataChapterNew = data.chapters.slice(start, end);
      setDataRender(dataChapterNew);
      setPage(page + 1);
      flatRef.current.scrollToIndex({ animated: true, index: 0 });
    }
  };

  const handlePreMore = () => {
    if (page > 1) {
      const start = (page - 1 - 1) * limit;
      const end = (page - 1) * limit;
      const dataChapterNew = data.chapters.slice(start, end);
      setDataRender(dataChapterNew);
      setPage(page - 1);
      flatRef.current.scrollToIndex({ animated: true, index: 0 });
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <CustomHeader navigation={navigation} title={"Chi tiết truyện"} />
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <DetailSkeleton />
        ) : (
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 8, width: windowWidth }}
          >
            <Text style={{ marginTop: 8, textAlign: "center", fontSize: 18 }}>
              {data?.name}
            </Text>
            <Text style={{ textAlign: "center" }}>{data?.updatedAt}</Text>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: getImage(data?.img) }}
                style={{
                  width: 200,
                  aspectRatio: 168 / 223,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: windowWidth,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 8,
                      justifyContent: "center",
                      marginTop: 20,
                    }}
                  >
                    <AntDesign name='wifi' style={{ fontSize: 20 }} />
                    <Text style={{ fontSize: 15, marginLeft: 4 }}>
                      {data?.status}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginLeft: 8,
                      marginTop: 8,
                      justifyContent: "center",
                    }}
                  >
                    <AntDesign name='user' style={{ fontSize: 20 }} />
                    <Text style={{ fontSize: 15, marginRight: 8 }}>
                      {data?.author ? data.author : "Đang cập nhật"}
                    </Text>
                  </View>
                </View>
                <Stack
                  direction='row'
                  divider={8}
                  wrap='wrap'
                  style={{ marginTop: 8 }}
                >
                  {data?.categories?.map((item) => (
                    <TouchableOpacity key={item.href}>
                      <Text
                        style={{ paddingHorizontal: 8, paddingVertical: 4 }}
                      >
                        {item.category}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </Stack>
                {/* <Text>{data?.content}</Text> */}
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <Button
                title='Đọc từ đầu'
                onPress={() =>
                  navigation.navigate("Chap", {
                    href: data.chapters[data.chapters.length - 1].href,
                    id: href,
                    name: data?.name,
                    namechap: data.chapters[data.chapters.length - 1].name,
                    vitri: (data.chapters.length % 20) - 1,
                    page: Math.ceil(data.chapters.length / 20),
                  })
                }
              />
              <Button
                title='Đọc mới nhất'
                onPress={() =>
                  navigation.navigate("Chap", {
                    href: data.chapters[0].href,
                    id: href,
                    name: data?.name,
                    namechap: data.chapters[0].name,
                    vitri: 0,
                    page: 1,
                  })
                }
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                marginTop: 8,
                paddingVertical: 8,
              }}
            >
              Danh sách chương
            </Text>
            <ScrollView>
              {page > 1 && (
                <Button
                  onPress={handlePreMore}
                  style={{ marginTop: 8, marginBottom: 16 }}
                  title='Xem tập mới hơn'
                />
              )}
              <FlatList
                data={dataRender}
                ref={flatRef}
                // onEndReached={handleLoadMore}
                // onEndReachedThreshold={0.05}
                style={{ minHeight: 300 }}
                renderItem={({ item, index }) => {
                  const isExist = chapters.some((element) => {
                    return element == item.href;
                  });

                  return (
                    <TouchableOpacity
                      key={item.href}
                      onPress={() =>
                        navigation.navigate("Chap", {
                          href: item.href,
                          id: href,
                          name: data?.name,
                          namechap: item.name,
                          vitri: index % 20,
                          page: Math.ceil((index + 1) / 20),
                        })
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingVertical: 6,
                        }}
                      >
                        <Text style={{ color: isExist ? "#ccc" : "#000" }}>
                          {item.name}
                        </Text>
                        <Text>{item.time}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                  // <Text>{item.name}</Text>
                }}
                keyExtractor={(item, index) => index}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
              />
              {page * limit < data.chapters.length && (
                <Button
                  onPress={handleNextMore}
                  style={{ marginTop: 8, marginBottom: 16 }}
                  title='Xem tập cũ hơn'
                />
              )}
            </ScrollView>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenDetail;

const styles = StyleSheet.create({});
