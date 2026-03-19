import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
class App extends Component{
 constructor(props){
   super(props);
   this.state ={
     nome:'Steve'
   };
 }
  render(){
  return(
    <View style={styles.container}>
    <TextInput style={styles.input}/>
    <Text style={styles.texto}>Bem vindo</Text>
    </View>
    );
  }
 }
 const styles = StyleSheet.create({
   container:{
     flex:1,
   },
   input:{
     height:45,
     borderWidth:1,
     borderColor: '#222',
     margin:10,
     fontSize:20,
     padding:10,
   },
   texto:{
     textAlign:'center',
     fontSize:25,

     },
   
 });

export default App;