import React from 'react';
import { View, Text, Button, TextInput, StyleSheet} from 'react-native';

export default function CadastroScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.texto}>Cadastro de Usuário</Text>
      <TextInput 
      style={styles.input}
      placeholder='Nome'/>

      <TextInput 
      style={styles.input}
      placeholder='Email'/>

      <TextInput 
      style={styles.input}
      placeholder='Senha'/>

      <Button
        title="Cadastrar"
        style={styles.botao}
        />
    </View>
  );
}
const styles = StyleSheet.create({
   container:{
     flex:1,
   },
   input:{
     height:50,
     borderWidth:1,
     borderColor: 'blue',
     borderRadius:10,
     
     margin:15,
     fontSize:15,
     padding:15,
   },
   botao:{
     
     textAlign:'center',
     fontSize:25,

     },

   texto:{
     margin:15,
     fontSize:25,
     padding:15,

     }
 });