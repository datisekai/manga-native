import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const CardHomeSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={styles.image} animation='wave' />
      <Skeleton
        width={"60%"}
        style={{ marginTop: 8 }}
        height={15}
        animation='wave'
      />
      <Skeleton
        width={"100%"}
        style={{ marginTop: 8 }}
        height={15}
        animation='wave'
      />
      <Skeleton
        width={"100%"}
        style={{ marginTop: 8 }}
        height={15}
        animation='wave'
      />
      <Skeleton
        width={"100%"}
        style={{ marginTop: 8 }}
        height={15}
        animation='wave'
      />
    </View>
  );
};

export default CardHomeSkeleton;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 240,
    aspectRatio: 168 / 223,
    borderRadius: 5,
  },
  container: {
    width: 180,
    marginTop: 16,
    marginHorizontal: 8,
  },
  name: {
    fontSize: 15,
    marginTop: 8,
  },
  chapter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },

  listChapter: {
    marginTop: 8,
  },
});
