import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SafeAreaView, StyleSheet, Text, FlatList, View } from "react-native";
import { Card, Title, Paragraph, Appbar, IconButton } from "react-native-paper";

const schools = [
  {
    name: "Samare Driving School",
    rating: 4.9,
    experience: "50 years of experience",
    passRate: "100% pass rate",
    instructors: "10 expert instructors",
    attention: "Individual attention",
    image: require("./../../assets/one.png"), // Local image reference
    simulators: "Modern Simulators",
  },
  {
    name: "Jaye Learners",
    rating: 4.5,
    experience: "42 years of experience",
    passRate: "100% pass rate",
    instructors: "8 expert instructors",
    lessonsType: "Theory lessons",
    image: require("./../../assets/one.png"), // Local image reference
    freeLesson: "One free lesson",
  },
  {
    name: "Ace Driving Academy",
    rating: 4.7,
    experience: "30 years of experience",
    passRate: "98% pass rate",
    instructors: "15 expert instructors",
    attention: "Personalized training programs",
    image: require("./../../assets/one.png"), // Local image reference
    simulators: "High-tech simulators",
  },
  {
    name: "Speedy Wheels",
    rating: 4.8,
    experience: "25 years of experience",
    passRate: "99% pass rate",
    instructors: "12 expert instructors",
    attention: "One-on-one lessons",
    image: require("./../../assets/one.png"), // Local image reference
    simulators: "State-of-the-art simulators",
  },
  {
    name: "Urban Drive School",
    rating: 4.6,
    experience: "35 years of experience",
    passRate: "97% pass rate",
    instructors: "20 expert instructors",
    lessonsType: "Comprehensive theory and practical lessons",
    image: require("./../../assets/one.png"), // Local image reference
    freeLesson: "First lesson free",
  },
  {
    name: "Pro Drivers Institute",
    rating: 4.7,
    experience: "40 years of experience",
    passRate: "95% pass rate",
    instructors: "18 expert instructors",
    attention: "Detailed driving assessments",
    image: require("./../../assets/one.png"), // Local image reference
    simulators: "Advanced driving simulators",
  },
  {
    name: "Elite Driving Hub",
    rating: 4.9,
    experience: "45 years of experience",
    passRate: "100% pass rate",
    instructors: "20 expert instructors",
    attention: "Custom lesson plans",
    image: require("./../../assets/one.png"), // Local image reference
    simulators: "Cutting-edge simulators",
  },
  {
    name: "Prime Driving Academy",
    rating: 4.8,
    experience: "20 years of experience",
    passRate: "96% pass rate",
    instructors: "10 expert instructors",
    lessonsType: "Interactive theory lessons",
    image: require("./../../assets/one.png"), // Local image reference
    freeLesson: "Two free lessons",
  },
];

const SchoolCard = ({ school }) => (
  <Card style={styles.card}>
    <Card.Cover source={school.image} style={styles.cover} />
    <Card.Content>
      <View style={styles.header}>
        <Title style={styles.title}>{school.name}</Title>
        <View style={styles.rating}>
          <Text style={styles.stars}>⭐️⭐️⭐️⭐️⭐️</Text>
          <Text style={styles.ratingText}> 4.9/5</Text>
        </View>
      </View>
      <View style={styles.detailsRow}>
        <Paragraph style={styles.detailColumn}>
          {"\u2022"} {school.experience}
        </Paragraph>
        <Paragraph style={styles.detailColumn}>
          {"\u2022"} {school.instructors}
        </Paragraph>
      </View>
      <View style={styles.detailsRow}>
        <Paragraph style={styles.detailColumn}>
          {"\u2022"} {school.passRate}
        </Paragraph>
        <Paragraph style={styles.detailColumn}>
          {"\u2022"} {school.attention || school.lessonsType}
        </Paragraph>
      </View>
      <Paragraph>
        {"\u2022"} {school.simulators || school.freeLesson}
      </Paragraph>
    </Card.Content>
  </Card>
);

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Appbar.Header style={styles.appbar}>
      <View style={styles.appbarContent}>
        <Text style={styles.appbarTitle}> Now · Borella</Text>
        <IconButton icon="chevron-down" size={27} color="purple" />
      </View>
    </Appbar.Header>
    <FlatList
      data={schools}
      renderItem={({ item }) => <SchoolCard school={item} />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={styles.listContainer}
    />
  </SafeAreaView>
);

const SearchScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Search</Text>
  </SafeAreaView>
);

const NotificationsScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Notifications</Text>
  </SafeAreaView>
);

const SettingsScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Settings</Text>
  </SafeAreaView>
);

const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Profile</Text>
  </SafeAreaView>
);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "purple" }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cog" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    marginTop: 20,
  },
  listContainer: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },
  cover: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 150,
    width: "100%",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  detailColumn: {
    flex: 1,
    fontFamily: "Tahoma",
  },
  appbar: {
    backgroundColor: "#ffffff",
  },
  appbarContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  appbarTitle: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 21,
    fontFamily: "Arial Black",
  },
  rating: {
    marginTop: 5,
    fontWeight: "bold",
    textAlign: "right",
    flexDirection: "row",
    alignItems: "center",
  },
  stars: {
    fontSize: 10,
    color: "#FFD700",
  },
  ratingText: {
    fontFamily: "Arial",
    fontSize: 12,
  },
  title: {
    fontFamily: "Georgia",
    fontSize: 18.5,
  },
});
