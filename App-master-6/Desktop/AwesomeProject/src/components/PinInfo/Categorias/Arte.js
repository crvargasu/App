import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert,
    Button,
    TextInput,
} from 'react-native';
import Map from '../../Map'
import * as firebase from "firebase";
import nextId from "react-id-generator";


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


export default class Arte extends React.Component {

    state = {
        title: '',
        description: '',
        errorMessage: null,
        mail: '',

    };

    onChangeDes = description => this.setState({ description });
    onChangeTitle = title => this.setState({ title });

    crear = (latitude, longitud, nombre, descripcion) => {
        // Alert.alert(this.state.latitude);
        pinId = nextId();
        firebase.database().ref('Pins/' + pinId).set({
            latitude: latitude,
            longitud: longitud,
            nombre: nombre,
            descripcion: descripcion,
            categoria: "Arte"

        });
        this.props.navigation.navigate("App")
    }

    render() {
        const latitude = this.props.navigation.getParam('latitude');
        const longitud = this.props.navigation.getParam('longitud');
        return (
            <View style={styles.Pagina}>
                <View style={styles.titulo_space}>
                    <Text style={styles.titulo}>
                        Arte
                    </Text>
                </View>

                <View style={styles.MainContainer}>

                    <Text style={styles.inputTitle}>Nombre del Evento</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        autoCapitalize="none"
                        onChangeText={this.onChangeTitle}
                        value={this.state.title}
                    ></TextInput>


                    <Text style={styles.inputTitle}>Descripción</Text>
                    <TextInput
                        style={{ height: HEIGHT / 2, borderColor: 'gray', borderWidth: 1 }}
                        autoCapitalize="none"
                        onChangeText={this.onChangeDes}
                        value={this.state.description}
                    />

                    <TouchableOpacity style={styles.button} 
                    onPress={() => { this.crear(latitude, longitud, this.state.title, this.state.description) }}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Crear</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        marginTop: HEIGHT / 50,
        justifyContent: 'space-around',
        backgroundColor: "white",
        marginLeft: HEIGHT / 50,
        marginRight: HEIGHT / 50,
        marginBottom: HEIGHT / 10,
    },

    Pagina: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "white",

    },
    titulo_space: {
        alignItems: "center"
    },

    titulo: {
        color: "black",
        marginTop: HEIGHT / 10,
        marginBottom: 0,
        fontSize: 16
    },
    inputTitle: {
        top: 20,
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    button: {
        top: 40,
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});