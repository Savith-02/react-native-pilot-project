import React from "react";
import { Button, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();

  const goTo = (destination) => {
    navigation.navigate(destination);
  };
  //For testing

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingVertical: 35, // 40 units of padding vertically
      // paddingHorizontal: 0, // 0 units of padding horizontally
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

  const screens = [
    { title: "Go to Home", screen: "Home" },
    { title: "Go to Settings", screen: "Settings" },
    { title: "Go to Notifications", screen: "Notification" },
    { title: "Go to Profile", screen: "Profile" },
    { title: "Go to Search", screen: "Search" },
  ];

  return (
    <View style={styles.container}>
      {screens.map((screen, index) => (
        <View key={index}>
          <Button title={screen.title} onPress={() => goTo(screen.screen)} />
        </View>
      ))}

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
