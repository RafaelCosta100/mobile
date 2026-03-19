"
import React, {Component} from "react";
import { Image, Text, View } from "react-native";
import imagem from './assets/matrix.jpg'


class App extends Component{
  render(){
    return(
      <View>
        <Text> Olá mundo</Text>
        <Text> Meu primero App</Text>
        <Text style={{color: '#0044FF', fontSize: 25, margin: 15}}>
          Programador
        </Text>
        <Image source={imagem}/>
        <Text>Rafael</Text>
      </View>
    );
  }
}
export default App;"

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//npx expo install react-dom 