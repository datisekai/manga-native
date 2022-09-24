import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Skeleton } from "@rneui/themed";

const CardBannerSkeleton = () => {
  return (
    <View style={{ width: 200, height: 264, position: "relative" }}>
      <Skeleton width={"100%"} height={"100%"} animation='wave' />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 50,
          paddingHorizontal: 16,
        }}
      >
        <Skeleton width={"100%"} height={15} />
        <Skeleton width={"100%"} height={15} style={{ marginTop: 8 }} />
      </View>
    </View>
  );
};

export default CardBannerSkeleton;

const styles = StyleSheet.create({});
