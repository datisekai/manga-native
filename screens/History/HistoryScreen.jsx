import React from "react";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector } from "react-redux";
import CardHistory from "../../components/Card/CardHistory";
import CustomHeader from "../../components/CustomHeader";

const windowWidth = Dimensions.get("window").width;

const HistoryScreen = ({ navigation }) => {
  const { chapters, comics } = useSelector((state) => state.history);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomHeader title={"Lịch sử"} navigation={navigation} isHome={true} />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 80,
          width: windowWidth,
        }}
      >
        <FlatList
          data={comics}
          numColumns={2}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <CardHistory {...item} navigation={navigation} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({});
