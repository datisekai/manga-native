import React, { FC } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import COLORS from "../../constants/color";
import CardBanner from "../Card/CardBanner";
import CardBannerSkeleton from "../Skeleton/CardBannerSkeleton";

const Section1 = ({ data, label, navigation, isLoading }) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      {label && (
        <Text style={{ ...styles.label, color: COLORS[colorScheme].text }}>
          {label}
        </Text>
      )}
      {isLoading ? (
        <FlatList
          horizontal={true}
          data={[1, 2, 3]}
          style={{ marginTop: 8 }}
          renderItem={({ item }) => <CardBannerSkeleton {...item} />}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        />
      ) : (
        <FlatList
          horizontal={true}
          data={data}
          style={{ marginTop: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("HomeDetail", {
                  href: item.href,
                })
              }
            >
              <CardBanner {...item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.href}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        />
      )}
    </View>
  );
};

export default Section1;

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  container: {
    marginTop: 16,
    flex: 1,
  },
});
