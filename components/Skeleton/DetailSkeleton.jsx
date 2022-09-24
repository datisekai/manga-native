import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";
import { Stack } from "@react-native-material/core";

const DetailSkeleton = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 8 }}>
      <Skeleton
        style={{ marginTop: 8 }}
        width={200}
        height={15}
        animation='wave'
      />
      <Skeleton
        width={250}
        height={15}
        animation='wave'
        style={{ marginTop: 8 }}
      />
      <Skeleton
        style={{ marginTop: 8 }}
        width={200}
        height={264}
        animation='wave'
      />
      <Stack
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
          paddingHorizontal: 8,
        }}
        spacing={8}
      >
        <Skeleton width={"100%"} height={15} animation='wave' />
        <Skeleton
          width={"100%"}
          height={15}
          animation='wave'
          style={{ marginLeft: 8 }}
        />
      </Stack>
      <Skeleton width={"100%"} height={30} animation='wave' />
      <Stack direction='row' style={{ marginTop: 8 }}>
        <Skeleton width={"100%"} height={20} animation='wave' />
        <Skeleton
          width={"100%"}
          height={20}
          animation='wave'
          style={{ marginLeft: 8 }}
        />
      </Stack>
      <Skeleton
        width={150}
        height={15}
        style={{ marginTop: 8 }}
        animation='wave'
      />
      <Skeleton
        width={"100%"}
        height={30}
        style={{ marginTop: 16 }}
        animation='wave'
      />
      <Skeleton
        width={"100%"}
        height={30}
        style={{ marginTop: 8 }}
        animation='wave'
      />
      <Skeleton
        width={"100%"}
        height={30}
        style={{ marginTop: 8 }}
        animation='wave'
      />
      <Skeleton
        width={"100%"}
        height={30}
        style={{ marginTop: 8 }}
        animation='wave'
      />
      <Skeleton
        width={"100%"}
        height={30}
        style={{ marginTop: 8 }}
        animation='wave'
      />
      <Skeleton
        width={"100%"}
        height={30}
        style={{ marginTop: 8 }}
        animation='wave'
      />
      <Skeleton
        width={"100%"}
        height={30}
        style={{ marginTop: 8 }}
        animation='wave'
      />
    </View>
  );
};

export default DetailSkeleton;

const styles = StyleSheet.create({});
