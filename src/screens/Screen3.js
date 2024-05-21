import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const DotNavigation = ({ currentIndex }) => {
  return (
    <View style={styles.dotContainer}>
      <View style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
      <View style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
      <View style={[styles.dot, currentIndex === 2 && styles.activeDot]} />
    </View>
  );
};

const DrivingSchoolApp = () => {
  return (
    <View style={styles.container}>
      {/* Blank space for separation */}
      <View style={styles.blankSpace} />

      <View style={styles.header}>
        <Text style={styles.schoolName}>Samare Driving School</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.stars}>{"⭐️⭐️⭐️⭐️⭐️"}</Text>
          <Text style={styles.rating}> 4.9/5</Text>
        </View>
      </View>
      <Text style={styles.schoolAddress}>No. 128, Kotta Road, Borella</Text>
      <Text style={styles.schoolAddress}>011 287 6760</Text>

      {/* Tabs */}
      <View style={[styles.tabsContainer, styles.row]}>
        <View style={styles.row}>
          <FontAwesome5 name="tag" size={25} color="purple" />
          <Text style={[styles.tabText, { marginLeft: 5 }]}>Our Packages</Text>
        </View>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <Text style={[styles.tabText1, { color: "purple" }]}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Packages */}
      <View style={styles.packagesRow}>
        <LinearGradient
          colors={["#a4508b", "#5f0a87"]}
          style={styles.packageContainer}>
          <Text style={styles.packageNumber}>01</Text>
          <Text style={styles.packageTitle}>Individual Package</Text>
          <Text style={styles.packagePrice}>Rs. 30,000.00</Text>
        </LinearGradient>
        <LinearGradient
          colors={["#a4508b", "#5f0a87"]}
          style={styles.packageContainer}>
          <Text style={styles.packageNumber}>02</Text>
          <Text style={styles.packageTitle}>
            VIP Package - Pick up & drop off
          </Text>
          <Text style={styles.packagePrice}>Rs. 45,000.00</Text>
        </LinearGradient>
      </View>

      {/* Dot Navigation */}
      <DotNavigation currentIndex={0} />

      {/* Additional Options */}
      <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <View style={styles.optionItem}>
            <View style={styles.optionBox}>
              <ImageBackground
                source={require("./../../assets/ONE.png")}
                style={styles.optionImage}
                imageStyle={{ borderRadius: 10 }}></ImageBackground>
            </View>
            <Text style={styles.optionLabel}>About Us</Text>
          </View>
          <View style={styles.optionItem}>
            <View style={styles.optionBox}>
              <ImageBackground
                source={require("./../../assets/TWO.png")}
                style={styles.optionImage}
                imageStyle={{ borderRadius: 10 }}></ImageBackground>
            </View>
            <Text style={styles.optionLabel}>Our Instructors</Text>
          </View>
          <View style={styles.optionItem}>
            <View style={styles.optionBox}>
              <ImageBackground
                source={require("./../../assets/THREE.png")}
                style={styles.optionImage}
                imageStyle={{ borderRadius: 10 }}></ImageBackground>
            </View>
            <Text style={styles.optionLabel}>Contact Us</Text>
          </View>
        </View>
        <View style={styles.optionsRow}>
          <View style={styles.optionItem}>
            <View style={styles.optionBox}>
              <ImageBackground
                source={require("./../../assets/FOUR.png")}
                style={styles.optionImage}
                imageStyle={{ borderRadius: 10 }}></ImageBackground>
            </View>
            <Text style={styles.optionLabel}>Reviews</Text>
          </View>
          <View style={styles.optionItem}>
            <View style={styles.optionBox}>
              <ImageBackground
                source={require("./../../assets/FIVE.png")}
                style={styles.optionImage}
                imageStyle={{ borderRadius: 10 }}></ImageBackground>
            </View>
            <Text style={styles.optionLabel}>Gallery</Text>
          </View>
          <View style={styles.optionItem}>
            <View style={styles.optionBox}>
              <ImageBackground
                source={require("./../../assets/SIX.png")}
                style={styles.optionImage}
                imageStyle={{ borderRadius: 10 }}></ImageBackground>
            </View>
            <Text style={styles.optionLabel}>Our Social Media</Text>
          </View>
        </View>
      </View>

      {/* Navigation */}
      <View style={styles.navContainer}>
        <View style={styles.navItem}>
          <FontAwesome5
            name="home"
            size={26}
            color="black"
            style={styles.selectedIcon}
          />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome5 name="search" size={26} color="black" />
          <Text style={styles.navText}>Search</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome5 name="bell" size={26} color="black" />
          <Text style={styles.navText}>Notifications</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome5 name="cog" size={26} color="black" />
          <Text style={styles.navText}>Settings</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome5 name="user" size={26} color="black" />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  blankSpace: {
    height: 20, // Adjust this height as needed
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  schoolName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  schoolAddress: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stars: {
    fontSize: 10,
    color: "#FFD700",
  },
  rating: {
    fontSize: 12,
    color: "#000",
  },
  tabsContainer: {
    marginTop: 15,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "blue", // Active tab color
  },
  tabText: {
    fontSize: 21, // Larger font size for "Our Packages"
    fontWeight: "bold", // Bold text for "Our Packages"
    color: "#000",
  },
  tabText1: {
    fontSize: 18, // Font size for "View All"
    fontWeight: "bold", // Bold text for "View All"
    color: "#000",
  },
  packagesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  packageContainer: {
    padding: 15,
    flex: 1,
    marginRight: 10, // Add some space between the packages
    borderRadius: 10,
    shadowColor: "#B2BEB5", // Shadow color
    shadowOffset: { width: 1, height: 2 }, // Offset for shadow
    shadowOpacity: 1, // Opacity of shadow
    shadowRadius: 3, // Blur radius for shadow
    elevation: 5,
  },
  packageNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10, // Add some space above the title
  },
  packagePrice: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "purple",
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionsRow: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  optionItem: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 1,
  },
  optionBox: {
    //flex: 1,
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    marginHorizontal: 15,
    marginVertical: 10, // Add margin between boxes
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    //overflow: 'hidden',
    backgroundColor: "#fff", // Ensure the background is white
    //borderWidth: 0.25, // Add border width
    borderColor: "gray", // Change border color to ash (gray)
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Offset for shadow
    shadowOpacity: 0.5, // Opacity of shadow
    shadowRadius: 3, // Blur radius for shadow
    elevation: 2, // Elevation for Android shadow
  },
  optionLabel: {
    fontSize: 14,
    marginTop: 0.25,
    textAlign: "center",
  },
  optionImage: {
    width: 65, // Adjust width and height to make the image smaller than the box
    height: 65,
    borderRadius: 10,
    alignContent: "top",
  },
  optionText: {
    fontSize: 16,
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    borderRadius: 5,
  },
  navContainer: {
    height: 60,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 2,
    borderTopColor: "#ddd",
    paddingVertical: 10,
    backgroundColor: "#D3D3D3",
  },
  navItem: {
    alignItems: "center",
  },
  selectedIcon: {
    color: "purple",
  },
  navText: {
    fontSize: 12,
    color: "black",
  },
});

export default DrivingSchoolApp;
