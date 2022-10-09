import React, { useEffect } from "react";
import {
  FlatList,
  LogBox,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
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
        {!isLoading ? (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index}
            numColumns={2}
            renderItem={({ item, index }) => (
              <CardHome
                {...item}
                index={index}
                key={item.href}
                navigation={navigation}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={{ width: 8, height: 8 }} />
            )}
          />
        ) : (
          <FlatList
            data={[1, 2, 3, 4]}
            keyExtractor={(item, index) => index}
            numColumns={2}
            renderItem={({ item, index }) => <CardHomeSkeleton />}
            ItemSeparatorComponent={() => (
              <View style={{ width: 8, height: 8 }} />
            )}
          />
        )}
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
    justifyContent: "center",
    alignItems: "center",
  },
});
