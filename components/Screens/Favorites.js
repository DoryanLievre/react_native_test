import React from 'react';
import { Text, SafeAreaView, StyleSheet} from 'react-native';


export default class Favorites extends React.Component {
    render() {
      return (
        <SafeAreaView style={styles.container}>
            <Text style={{ marginTop: 10, marginBottom: 50 }}>Your favorite sneakers are stored here!</Text>
        </SafeAreaView> 
      )
  }
};
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 25,
      marginVertical: 25, 
      flex: 1,
    },
  });
  Favorites.navigationOptions = {
    title: 'Favorites',
    headerTintColor: 'black',
  };