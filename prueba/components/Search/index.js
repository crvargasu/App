import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class Search extends Component {
    render(){
        return <GooglePlacesAutocomplete
        placeholder = 'Para donde?'
        placeholderTextColor ="#333"
        onPress = {() => {}}

        textInputProps = {{
            autoCapitalize: 'none',
            autoCorrect: false
         }}
        fetchDetails
        enablePoweredByContainer = {false}
        />;
    }

}