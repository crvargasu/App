import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

const WIDTH=Dimensions.get('window').width

export default class Mapa extends React.Component { 
    constructor(props){
      super(props)
      this.state = {
        region: null
      }
      this._getLocationAsync()
      
    } 
    _getLocationAsync= async() =>{
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted'){
        console.log("Denegado")}
        else{

        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        let region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0055,
            longitudeDelta: 0.0055,
        };
        this.setState({region: region}, function () {
          console.log(this.state.region);
      });
    }

    };
    onPress = () => {
      this._getLocationAsync();
      console.log("Buscando")
    };
    render() {
      return (
        <View style={{flex: 1}}>

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Image source={require('../assets/arrow.png')}
        
          style = {{width:50, height:50}} />
        </TouchableOpacity>
       <MapView
          region={this.state.region}
          provider={"google"}
          style={{flex: 1}}
          loadingEnabled={true}
          cacheEnabled={true}
          rotateEnabled={false}
          showsCompass={true}
          showsUserLocation={true}>
       </MapView> 
       </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      zIndex: 9,
       position: 'absolute',
       flexDirection: 'row',
       width: 50,
       height: 50,
       bottom: 100,
       right: 20,
       borderRadius: 50,
       backgroundColor: 'white',
       alignItems: 'center',
       shadowColor: 'black',
       justifyContent: 'center'

      
    },
  });