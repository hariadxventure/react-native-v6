import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Blog = ({route, navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Blog Screen</Text>
      {/* <Text>{route?.params?.id}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        // display: 'flex',
        // justifyContent: "center",
        // alignItems: 'center',
        // backgroundColor: 'blue',
        // color: 'white',
        // height: '50%'
    }
})

export default Blog