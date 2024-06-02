import { View, Pressable, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { db } from "../configs/firebaseConfig.js";
import { collection, getDocs } from 'firebase/firestore';

export default function DropDownListComponent ({buttonName, iconName}) {
    return (
        <View>
        <Pressable
        onPress={() => console.log("Button Pressed")}> 
        <View style = {styles.button}>
        <Icon name = {iconName} size={24} style = {styles.icon}/>
        <Text style = {styles.text}> {buttonName}</Text>
        <Icon name = "arrow-drop-down" size = {35} style = {[styles.icon, styles.icon2]} />
        </View>
        </Pressable>
        </View>
    )

}

const styles = StyleSheet.create ({
    button: {
        height: 42, 
        width: 291, 
        borderColor: "#543586", 
        alignSelf: "center", 
        borderWidth : 3, 
        borderRadius: 10, 
        flexDirection: "row", 
        justifyContent: "space-between", 
        paddingVertical: 7, 
        paddingHorizontal: 10,
        marginBottom: 20 
    },
    text : {
        color: "#7E7171", 
        fontSize: 21, 
        fontFamily: "jalidi"
    },
    icon : {
        color: "#543586"
    },
    icon2: {
        marginTop: -5, 
    },
    
})