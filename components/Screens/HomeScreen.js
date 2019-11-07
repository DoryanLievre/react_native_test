import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity,StyleSheet, Spacer, SafeAreaView } from 'react-native';
import { createAppContainer }   from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render(){
    return (
    <SafeAreaView style={styles.container2}>
      <View style={ styles.container }>
        <Text style={{ marginTop: 10, marginBottom: 50 }}></Text>
        <TouchableOpacity style={styles.buttonContainer}>
                <Text>Homme</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Femme</Text> 
              </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container2: {
    marginHorizontal: 25,
      marginVertical: 25, 
      flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
    buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
})

HomeScreen.navigationOptions = {
  title: 'Welcome',
  style: {
    textAlign: 'center',
    headerTintColor: 'black',
 },
};

export default HomeScreen