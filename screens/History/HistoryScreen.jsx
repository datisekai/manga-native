import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector } from "react-redux";
import CardHistory from "../../components/Card/CardHistory";
import CustomHeader from "../../components/CustomHeader";

const HistoryScreen = ({ navigation }) => {
  const { chapters, comics } = useSelector((state) => state.history);

  return (
    <SafeAreaView>
      <CustomHeader title={"Lịch sử"} navigation={navigation} isHome={true} />
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 80,
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
