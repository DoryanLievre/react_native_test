import React from 'react';
import { createAppContainer }   from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Favorites from './components/Screens/Favorites';
import HomeScreen from './components/Screens/HomeScreen';
import Product from './components/Screens/Product'
import SettingsScreen from './components/Screens/SettingsScreen'

const Tabs = createMaterialBottomTabNavigator(
    {
      HomeScreen: { screen: HomeScreen },
      Product: { screen: Product },
      Favorites: { screen: Favorites },
      SettingsScreen: { screen : SettingsScreen }
      
    },
    {
      initialRouteName: 'HomeScreen',
      activeColor: '#fc8c03',
      inactiveColor: '##fff',
      barStyle: { backgroundColor: '#fff' }
    }
  );

  export default createAppContainer(Tabs);
