import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Switch, Alert } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            input: '',
            sexo: 0,
            sexos: [
                { key: 1, nome: 'Feminino' },
                { key: 2, nome: 'Masculino' },
            ],
            valor: 0,
            status: false 
        };
        this.entrar = this.entrar.bind(this);
    }

    entrar() {
        if (this.state.input === '') {
            alert('Digite seu nome');
            return;
        }
        this.setState({ nome: 'Conta criada ' + this.state.input });
        Alert.alert('Informações aqui');
    }

    render() {
        let sexoItem = this.state.sexos.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome} />
        });

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    underlineColorAndroid="transparent"
                    onChangeText={(texto) => this.setState({ input: texto })}
                />
                
                
                {/* <Text style={styles.texto}>{this.state.nome}</Text> */}
                
                <Text style={styles.logo}>Selecione seu sexo:</Text>

                <Picker
                    selectedValue={this.state.sexo}
                    onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}
                >
                    {sexoItem}
                </Picker>

                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                    Selecione seu limite:
                </Text>
                
                <Slider
                    minimumValue={0}
                    maximumValue={10000}
                    onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
                    value={this.state.valor}
                    minimumTrackTintColor="#00FF00"
                    maximumTrackTintColor="#FF0000"
                />

                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                    R$ {this.state.valor.toFixed(2)}
                </Text>

                <Switch
                    value={this.state.status}
                    onValueChange={(valorSwitch) => this.setState({ status: valorSwitch })}
                    thumbColor="#FF0000"
                />

                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                    {(this.state.status) ? "Casado" : "Solteiro"}
                </Text>
                <Button title="Criar conta" onPress={this.entrar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30 // Adicionado um marginTop para não ficar colado no topo da tela
    },
    input: {
        height: 45,
        borderWidth: 3,
        borderColor: 'blue',
        borderRadius: 10,
        backgroundColor: 'lightgray',
        margin: 20,
        fontSize: 20,
        padding: 10,
    },
    texto: {
        textAlign: 'center',
        fontSize: 25,
    },
    // 3. Adicionado estilo para o 'logo' que faltava
    logo: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    }
});

export default App;