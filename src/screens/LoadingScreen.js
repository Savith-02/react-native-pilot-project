import React from "react";
import { Button, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();
  const goToPackages = () => {
    navigation.navigate("Screen3");
  };
  //For testing

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 35, // 40 units of padding vertically
      paddingHorizontal: 0, // 0 units of padding horizontally
    },
    imageContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: "contain",
      borderRadius: 100,
    },
  });

  return (
    <View style={styles.container}>
      <View>{<Button title="Go to Packages" onPress={goToPackages} />}</View>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../../assets/loadScreen/icon.jpg")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default LoadingScreen;
