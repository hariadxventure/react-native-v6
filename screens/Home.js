import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'

const Home = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={{color:'white', fontSize:30}}>Home Screen</Text>
          <Link to={{screen: 'About'}} style={{fontSize:20, backgroundColor: "yellow", padding:10, borderRadius:15, margin:10}} >Go to About</Link>
          <Link to={{screen: 'Blog'}} style={{fontSize:20, backgroundColor: "yellow", padding:10, borderRadius:15, margin:10}} >Go to Blog</Link>
          <Link to={{screen: 'Contact'}} style={{fontSize:20, backgroundColor: "yellow", padding:10, borderRadius:15, margin:10}} >Go to Contact</Link>
    
      <Button title='Blog' onPress={() => props.navigation.push('About')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    paddingTop: 10,
    justifyContent: "flex-start",
    alignItems: 'center',
    backgroundColor: 'green',
    height: '100%'
  }
})

export default Home