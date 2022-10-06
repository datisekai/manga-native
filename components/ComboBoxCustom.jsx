import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import ChapSkeleton from "./Skeleton/ChapSkeleton";
import DetailAPI from "../actions/detail";

const ComboBoxCustom = ({
  hrefkey,
  id,
  name,
  namechap,
  vitri,
  page,
  dataAllChaps,
  dataAllChapsBack,
  dataAllChapsNext,
  navigation,
}) => {
  const limit = 20;
  // console.log(namechap);

  return (
    <>
      <View
        style={{
          marginHorizontal: 100,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          {vitri === dataAllChaps?.chapters.length - 1 &&
          page === dataAllChaps?.totalPage ? (
            <FontAwesome5
              name="angle-left"
              style={{
                fontSize: 30,
                backgroundColor: "#d0c3c2",
                color: "#fff",
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 5,
              }}
            />
          ) : (
            <FontAwesome5
              name="angle-left"
              onPress={() =>
                navigation.navigate("Chap", {
                  href:
                    vitri === limit - 1
                      ? dataAllChapsBack?.chapters[0].href
                      : dataAllChaps?.chapters[vitri + 1].href,
                  id: id,
                  name: name,
                  namechap:
                    vitri === limit - 1
                      ? dataAllChapsBack?.chapters[0].name
                      : dataAllChaps?.chapters[vitri + 1].name,
                  vitri: vitri === limit - 1 ? 0 : vitri + 1,
                  page: vitri === limit - 1 ? page + 1 : page,
                })
              }
              style={{
                fontSize: 30,
                backgroundColor: "#d9534f",
                color: "#fff",
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 5,
              }}
            />
          )}
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderRadius: 5,
              borderColor: "black",
              borderWidth: 1,
              width: 130,
              paddingHorizontal: 5,
              paddingVertical: 5,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AllChap", {
                  href: id,
                  name: name,
                  keycolorhrefchap: hrefkey,
                  page: page,
                  totalPage: dataAllChaps?.totalPage,
                });
              }}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 30,
              }}
            >
              <View
                style={{
                  width: 100,
                  justifyContent: "center",
                }}
              >
                <Text>{namechap}</Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <FontAwesome5 name="chevron-down" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          {vitri === 0 && page === 1 ? (
            <FontAwesome5
              name="angle-right"
              style={{
                fontSize: 30,
                backgroundColor: "#d0c3c2",
                color: "#fff",
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 5,
              }}
            />
          ) : (
            <FontAwesome5
              name="angle-right"
              onPress={() =>
                navigation.navigate("Chap", {
                  href:
                    vitri === 0
                      ? dataAllChapsNext?.chapters[limit - 1].href
                      : dataAllChaps?.chapters[vitri - 1].href,
                  id: id,
                  name: name,
                  namechap:
                    vitri === 0
                      ? dataAllChapsNext?.chapters[limit - 1].name
                      : dataAllChaps?.chapters[vitri - 1].name,
                  vitri: vitri === 0 ? limit - 1 : vitri - 1,
                  page: vitri === 0 ? page - 1 : page,
                })
              }
              style={{
                fontSize: 30,
                backgroundColor: "#d9534f",
                color: "#fff",
                paddingVertical: 4,
                paddingHorizontal: 12,
                borderRadius: 5,
              }}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default ComboBoxCustom;
