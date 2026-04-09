import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',gap: 15 }}>
      <Text style={styles.texto}>Página inicial</Text>
      <Button
       
        title="Ir para Cadastro"
        color="#4CAF50"
        onPress={() => navigation.navigate('Cadastro')}
      />
       <Button
        title="Ir para Consulta"
        onPress={() => navigation.navigate('Consulta')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
   
     texto:{
     margin:15,
     fontSize:20,
     padding:15,

     },
   
 });