import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const About = ({route, navigation})=>{
    // hooks=====>
// const About = ()=>{
//     const route = useRoute()
//     const navigation = useNavigation()
    // hooks======>
    // console.log("route,,,= ", route)
    // console.log("navigation,,,= ", navigation)
    return(
        <View style={styles.screen}>
            <Text>About Screen</Text>
            <Text>{route.params.id}</Text>
            <Button title="Go back" onPress={()=>navigation.goBack()}></Button>
            <Button title="Blog with params" onPress={()=>navigation.navigate('Blog',{id: 22,otherParams: "other params"})}></Button>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    screen:{
        // display: 'flex',
        // justifyContent: "center",
        // alignItems: 'center',
        // backgroundColor: 'gray',
        // height: '50%'
    }
})

