import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

class Peddoas extends Component{
    render(){
        return(
            <View style={styles.areaPessoas}>
            <Text>Olá!!</Text>
            <Text style={styles.textoPessoa}>Nome:{this.props.data.nome}</Text>
            <Text style={styles.textoPessoa}>Idade:{this.props.data.idade}</Text>
            <Text style={styles.textoPessoa}>Email:{this.props.data.email}</Text>
            </View>
        );
        }
    }
const styles = StyleSheet.create({
    areaPessoas:{
        backgroundColor:'#222',
        height:150,
        warningBottom:25,
        padding:15
    },
    textoPessoa:{
        color:'#fff'
    }
});
export default Pessoas;