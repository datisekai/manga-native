import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";
import { Stack } from "@react-native-material/core";

const ChapSkeleton = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop:10, paddingHorizontal: 4, }}>
      <Skeleton
        style={{ marginTop: 10 }}
        width={350}
        height={200}
        animation='wave'
      />
      <Skeleton
        style={{ marginTop: 8 }}
        width={350}
        height={100}
        animation='wave'
      />
      <Skeleton
        style={{ marginTop: 8 }}
        width={350}
        height={350}
        animation='wave'
      />
    </View>
  );
};

export default ChapSkeleton;

const styles = StyleSheet.create({});