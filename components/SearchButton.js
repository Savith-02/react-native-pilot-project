import { View, Pressable, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchButtonComponent () {
    return (
        <View>
        <Pressable
        onPress={() => console.log("Button Pressed")}> 
        <View style = {styles.button}>
        <Icon name = "search" size={24} style = {styles.icon}/>
        <Text style = {styles.text}> Search</Text>
        </View>
        </Pressable>
        </View>
    )

}

const styles = StyleSheet.create ({
    button: {
        height: 42, 
        width: 145, 
        backgroundColor: "#4b0082", 
        alignSelf: "center", 
        borderRadius: 10, 
        flexDirection: "row",  
        paddingVertical: 10, 
        paddingHorizontal: 10,
        marginBottom: 20 
    },
    text : {
        color: "white", 
        fontSize: 20, 
        fontFamily: "dmsans",
        marginStart: 15
    },
    icon : {
        color: "white"
    },
})