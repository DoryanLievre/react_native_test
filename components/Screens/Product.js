import React from 'react';
import { Text, View,SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default class Product extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
        image: {uri: 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/kqwa44cxiyqfoebt4zef/chaussure-air-force-1-07-pour-vqMQtM.jpg'}
      };
      this.buttonLike = this.buttonLike.bind(this);
      this.buttonDislike = this.buttonDislike.bind(this);
      this.nextImage = this.nextImage.bind(this);
    }
  
    buttonLike() {
      this.setState({value: 'LIKED'});
      // UTILISER REDUX POUR ENREGISTRER LES FAVORIS
    }
  
    buttonDislike() {
      this.setState({value: 'DISLIKED'});
    }
  
    nextImage() {
        this.setState({image: {uri: 'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/upbpv6y2afnn54wrablm/chaussure-air-force-1-07-pour-vqMQtM.jpg'} });
    }
  
    render() {
      return (
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity onPress={() => this.nextImage()} style={{ marginBottom: 15 }}>
              <Image
                source={this.state.image}
                style={{width: 200, height: 200, borderRadius: 20}}
              />
            </TouchableOpacity>
  
            <Text>Nike Air Force 1</Text>
            <Text>{this.state.value}</Text>
          </View>
  
            <View style={{ alignItems: "center", marginTop: 50 }}>
              <TouchableOpacity onPress={() => this.buttonLike()} style={{ marginBottom: 15 }}>
                <Image
                  source={{uri: 'https://cdn.startupsavant.com/wp-content/uploads/2014/01/Validate-your-business-idea.png'}}
                  style={{width: 50, height: 50, borderRadius: 20}}
                />
              </TouchableOpacity>
  
              <TouchableOpacity onPress={() => this.buttonDislike()}>
                <Image
                  source={{uri: 'https://www.seekpng.com/png/full/137-1378649_close-delete-remove-exit-cross-comments-x-band.png'}}
                  style={{width: 40, height: 40, borderRadius: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
    }
  };
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 25,
      marginVertical: 25, 
      flex: 1,
    },
  });
  Product.navigationOptions = {
    title: 'Products',
  };