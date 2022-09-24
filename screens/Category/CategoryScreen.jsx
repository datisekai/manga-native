import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import { useQuery } from "@tanstack/react-query";
import SearchAPI from "../../actions/search";
import { Button } from "@react-native-material/core";

const CategoryScreen = ({ navigation }) => {
  const { data, isLoading } = useQuery(["category"], SearchAPI.getAllCategory);

  return (
    <SafeAreaView>
      <CustomHeader title={"Thể loại"} navigation={navigation} isHome={true} />
      <ScrollView contentContainerStyle={styles.list}>
        {data?.map((item) => (
          <Button
            key={item.id}
            onPress={() =>
              navigation.navigate("searchs", {
                screen: "SearchCategory",
                params: { ...item },
              })
            }
            style={styles.button}
            title={item.name}
            variant='outlined'
          />
        ))}
        {isLoading && <Text>Loading...</Text>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingBottom: 50,
  },
  button: {
    marginTop: 8,
  },
});
