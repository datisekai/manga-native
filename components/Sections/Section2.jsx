import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React, { FC } from "react";
import COLORS from "../../constants/color";
import CardHome from "../Card/CardHome";
import CardHomeSkeleton from "../Skeleton/CardHomeSkeleton";

const Section2 = ({ data, label, navigation, isLoading }) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      {label && (
        <Text style={{ ...styles.label, color: COLORS[colorScheme].text }}>
          {label}
        </Text>
      )}

      <ScrollView contentContainerStyle={styles.list}>
        {!isLoading
          ? data.map((item) => (
              <CardHome {...item} key={item.href} navigation={navigation} />
            ))
          : [1, 2, 3, 4].map((item) => <CardHomeSkeleton key={item} />)}
      </ScrollView>
    </View>
  );
};

export default Section2;

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  container: {
    marginTop: 16,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
