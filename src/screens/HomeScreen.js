import { Text, View, StyleSheet,Image, ScrollView } from "react-native";
import StatusBarComponent from "../../components/statusBar.js"
import DropDownListComponent from "../../components/DropDownList.js"
import SearchButtonComponent from "../../components/SearchButton.js";

export default function HomeScreen () {
    return(
        <View style = {styles. container}>
            <StatusBarComponent/>
            <Text style = {[styles. text, styles.heading]}> Locate. Select. Drive</Text>
            <Text style = {[styles. text, styles.NormalText]}>The perfect driving school is just a tap away!</Text>
            <Image source= {require("../../assets/homeScreen/img1.png")} style = {styles.image}/>
            <DropDownListComponent buttonName = "Location" iconName = "location-on" />
            <DropDownListComponent buttonName = "Auto" iconName = "directions-car"/>
            <SearchButtonComponent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "white"},
    text: {color: "#543586", textAlign: "center", paddingVertical: 10},
    heading : {fontSize: 24, fontWeight: "bold", fontFamily: "inter"},
    NormalText : {fontSize: 20, fontFamily: "jalidi"},
    image : {width : 300, height: 300, alignSelf: "center"},
    search : {width: 145, color: "white", fontFamily: "dmsans"}
})