import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";
import { Stack } from "@react-native-material/core";

const ChapSkeleton = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
      }}
    >
      <Skeleton
        style={{ marginTop: 10, marginHorizontal: 4 }}
        width={Dimensions.get("window").width - 10}
        height={40}
        animation="wave"
      />
      <Skeleton
        style={{ marginTop: 2, marginHorizontal: 4 }}
        width={Dimensions.get("window").width / 3}
        height={40}
        animation="wave"
      />
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          backgroundColor: "red",
          marginTop: 50,
          marginHorizontal: 100,
          alignItems: "center",
        }}
      >
        <Skeleton
          style={{ flex: 0.5 }}
          width={50}
          height={50}
          animation="wave"
        />
        <Skeleton
          style={{ flex: 1, marginHorizontal: 5 }}
          width={120}
          height={50}
          animation="wave"
        />
        <Skeleton
          style={{ flex: 0.5 }}
          width={50}
          height={50}
          animation="wave"
        />
      </View>
      <View style={{ marginTop: 40, alignItems: "center" }}>
        <Skeleton
          style={{ marginBottom: 20 }}
          width={Dimensions.get("window").width - 10}
          height={400}
          animation="wave"
        />
        <Skeleton
          width={Dimensions.get("window").width - 10}
          height={400}
          animation="wave"
        />
      </View>
    </View>
  );
};

export default ChapSkeleton;

const styles = StyleSheet.create({});
