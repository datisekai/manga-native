import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomHeader from "../../components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import DetailAPI from "../../actions/detail";
import { getImage } from "../../utils";
import { AntDesign } from "@expo/vector-icons";
import { Button, Stack } from "@react-native-material/core";
import DetailSkeleton from "../../components/Skeleton/DetailSkeleton";

const HomeScreenDetail = ({ navigation, route }) => {
  const { href, name } = route.params;

  const { data, isLoading } = useQuery(["detail", href], () => {
    if (href) {
      return DetailAPI.detail(href);
    }
  });

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <CustomHeader navigation={navigation} title={"Chi tiết truyện"} />
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <DetailSkeleton />
        ) : (
          <ScrollView contentContainerStyle={{ paddingHorizontal: 8 }}>
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
                    <Text style={{ fontSize: 15, marginLeft: 4 }}>
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
                  navigation.navigate("Chap", { href: data.chapters[0].href, id: href, name:data?.name, namechap: data.chapters[0].name })
                }
              />
              <Button
                title='Đọc mới nhất'
                onPress={() =>
                  navigation.navigate("Chap", {
                    href: data.chapters[data.chapters.length - 1].href, id: href, name:data?.name, namechap: data.chapters[0].name
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
            <FlatList
              data={data?.chapters}
              style={{ minHeight: 300 }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  key={item.href}
                  onPress={() =>
                    navigation.navigate("Chap", { href: item.href, id: href, name:data?.name, namechap: item.name })
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
                    <Text>{item.name}</Text>
                    <Text>{item.time}</Text>
                  </View>
                </TouchableOpacity>
                // <Text>{item.name}</Text>
              )}
              keyExtractor={(item) => item.href}
              ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenDetail;

const styles = StyleSheet.create({});
