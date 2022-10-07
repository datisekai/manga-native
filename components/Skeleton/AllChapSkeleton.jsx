import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";
import { Stack } from "@react-native-material/core";

const AllChapSkeleton = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
      }}
    >
      <View style={{ flexDirection: "row", flex: 2 }}>
        <View
          style={{
            paddingHorizontal: 4,
            marginBottom: 10,
            marginLeft: 5,
            backgroundColor: "red",
            width: Dimensions.get("window").width / 2 - 7,
          }}
        >
          {arr.map((item) => {
            return (
              <Skeleton
                style={{ marginBottom: 10 }}
                height={70}
                animation="wave"
              />
            );
          })}
        </View>
        <View
          style={{
            paddingHorizontal: 4,
            marginBottom: 10,
            marginLeft: 5,
            width: Dimensions.get("window").width / 2 - 7,
          }}
        >
          {arr.map((item) => {
            return (
              <Skeleton
                style={{ marginBottom: 10 }}
                height={70}
                animation="wave"
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default AllChapSkeleton;

const styles = StyleSheet.create({});
