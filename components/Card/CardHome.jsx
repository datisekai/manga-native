import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { useSelector } from "react-redux";
import COLORS from "../../constants/color";
import { getImage } from "../../utils";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CardHome = ({ href, img, name, newChapters, navigation }) => {
  const colorScheme = useColorScheme();

  const { chapters, comics } = useSelector((state) => state.history);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HomeDetail", {
            href: href,
            name: name,
          })
        }
      >
        <Image style={styles.image} source={{ uri: getImage(img) }} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HomeDetail", {
            href: href,
            name: name,
          })
        }
      >
        <Text
          style={{ ...styles.name, color: COLORS[colorScheme].text }}
          numberOfLines={1}
        >
          {name}
        </Text>
      </TouchableOpacity>
      <View style={styles.listChapter}>
        {newChapters?.map((item, index) => {
          const isExist = chapters.some((element) => element === item.href);

          return (
            <TouchableOpacity
              key={item.name}
              onPress={() =>
                navigation.navigate("Chap", {
                  href: item.href,
                  id: href,
                  name,
                  namechap: item.name,
                  vitri: index % 20,
                  page: Math.ceil((index + 1) / 20),
                })
              }
            >
              <View style={styles.chapter} key={item.href}>
                <Text
                  style={{ color: isExist ? "#ccc" : COLORS[colorScheme].text }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: COLORS[colorScheme].text }}>
                  {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 168 / 223,
    borderRadius: 5,
  },
  container: {
    width: windowWidth * 0.5 - 10,
    marginTop: 16,
    marginHorizontal: 3,
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
