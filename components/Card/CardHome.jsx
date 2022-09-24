import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React, { FC } from "react";
import COLORS from "../../constants/color";
import { getImage } from "../../utils";

const CardHome = ({
  href,
  img,
  name,
  description,
  id,
  newChapter,
  newChapters,
  navigation,
}) => {
  const colorScheme = useColorScheme();

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
        <ImageBackground
          style={styles.image}
          source={{ uri: getImage(img) }}
        ></ImageBackground>
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
        {newChapters?.map((item) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => navigation.navigate("Chap", { href: item.href })}
          >
            <View style={styles.chapter} key={item.href}>
              <Text style={{ color: COLORS[colorScheme].text }}>
                {item.name}
              </Text>
              <Text style={{ color: COLORS[colorScheme].text }}>
                {item.time}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
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
    height: 240,
  },
  container: {
    width: 180,
    marginTop: 16,
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
