import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
//import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import Mapa from './components/Mapa';


export default class App extends React.Component { 
  render() {
    return (
      <View style={{flex: 1}}>
      <Mapa />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});