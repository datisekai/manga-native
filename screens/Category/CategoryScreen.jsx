import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import { useQuery } from "@tanstack/react-query";
import SearchAPI from "../../actions/search";
import { Button } from "@react-native-material/core";

const data = [
  { id: "action", name: "Action" },
  { id: "truong-thanh", name: "Adult" },
  { id: "adventure", name: "Adventure" },
  { id: "anime", name: "Anime" },
  { id: "chuyen-sinh-213", name: "Chuyển sinh" },
  { id: "comedy-99", name: "Comedy" },
  { id: "comic", name: "Comic" },
  { id: "cooking", name: "Cooking" },
  { id: "co-dai-207", name: "Cổ đại" },
  { id: "doujinshi", name: "Doujinshi" },
  { id: "drama-103", name: "Drama" },
  { id: "dam-my", name: "Đam mỹ" },
  { id: "ecchi", name: "Ecchi" },
  { id: "fantasy-105", name: "Fantasy" },
  { id: "harem-107", name: "Harem" },
  { id: "historical", name: "Historical" },
  { id: "horror", name: "Horror" },
  { id: "josei", name: "Josei" },
  { id: "live-action", name: "Live action" },
  { id: "manga-112", name: "Manga" },
  { id: "manhua", name: "Manhua" },
  { id: "manhwa-11400", name: "Manhwa" },
  { id: "doujinshi", name: "Doujinshi" },
  { id: "martial-arts", name: "Martial Arts" },
  { id: "mature", name: "Mature" },
  { id: "mecha-117", name: "Mecha" },
  { id: "mystery", name: "Mystery" },
  { id: "ngon-tinh", name: "Ngôn tình" },
  { id: "one-shot", name: "One shot" },
  { id: "psychological", name: "Psychological" },
  { id: "romance-121", name: "Romance" },
  { id: "school-life", name: "School Life" },
  { id: "sci-fi", name: "Sci-fi" },
  { id: "seinen", name: "Seinen" },
  { id: "shoujo", name: "Shoujo" },
  { id: "shoujo-ai-126", name: "Shoujo Ai" },
  { id: "shounen-127", name: "Shounen" },
  { id: "shounen-ai", name: "Shounen Ai" },
  { id: "slice-of-life", name: "Slice Of Life" },
  { id: "yaoi", name: "Yaoi" },
  { id: "soft-yaoi", name: "Soft Yaoi" },
  { id: "yuri", name: "Yuri" },
  { id: "soft-yuri", name: "Soft Yuri" },
  { id: "sports", name: "Sports" },
  { id: "supernatural", name: "Supernatural" },
  { id: "smut", name: "Smut" },
  { id: "tap-chi-truyen-tranh", name: "Tạp chí truyện tranh" },
  { id: "thieu-nhi", name: "Thiếu nhi" },
  { id: "tragedy-136", name: "Tragedy" },
  { id: "trinh-tham", name: "Trinh thám" },
  { id: "truyen-scan", name: "Truyện Scan" },
  { id: "truyen-mau", name: "Truyện màu" },
  { id: "viet-nam", name: "Việt Nam" },
  { id: "webtoon", name: "Webtoon" },
  { id: "xuyen-khong-205", name: "Xuyên không" },
  { id: "16", name: "16+" },
];

const CategoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <CustomHeader title={"Thể loại"} navigation={navigation} isHome={true} />
      <ScrollView contentContainerStyle={styles.list}>
        {data?.map((item) => (
          <Button
            key={item.id}
            onPress={() =>
              navigation.navigate("categories", {
                screen: "searchCategory",
                params: { ...item },
              })
            }
            style={styles.button}
            title={item.name}
            variant='outlined'
          />
        ))}
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
