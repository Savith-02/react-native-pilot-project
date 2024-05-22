import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();
  const goToLoadingScreen = () => {
    navigation.navigate("Loading");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingVertical: 35, // 40 units of padding vertically
      // paddingHorizontal: 0, // 0 units of padding horizontally
    },
  });
  return (
    <View style={styles.container}>
      {<Button title="Go to Loading" onPress={goToLoadingScreen} />}
    </View>
  );
};

export default SettingScreen;
