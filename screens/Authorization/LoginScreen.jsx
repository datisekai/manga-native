import AntDesign from "@expo/vector-icons/AntDesign";
import { Button, IconButton, TextInput } from "@react-native-material/core";
import React, { useState } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const LoginScreen = ({ navigation }) => {
  const colorTheme = useColorScheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView>
      <CustomHeader title={"Đăng nhập"} navigation={navigation} isHome={true} />
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            onChangeText={(e) => setUsername(e)}
            value={username}
            label='Tài khoản'
            leading={(props) => <Icon name='account' {...props} />}
          />
          <TextInput
            onChangeText={(e) => setPassword(e)}
            value={password}
            label='Mật khẩu'
            style={{ marginTop: 8 }}
            leading={(props) => <Icon name='account-lock' {...props} />}
          />
          <Button
            style={{ marginTop: 16 }}
            variant='contained'
            title='Đăng nhập'
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  form: {
    width: "80%",
    minHeight: 400,
  },
});
