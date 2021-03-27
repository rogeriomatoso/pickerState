import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',      
    }
    this.nomeUsuario = this.nomeUsuario.bind(this);
  }
  nomeUsuario(texto){
    this.setState({nome: texto});
  }

  render(){
    return (
      <View style={styles.container}>
        <View>
          <Head/>
        </View>
        <View>
          <Text style={styles.textInput}> Selecione os parâmetros:</Text>
          <TextInput 
            style={styles.input}
            placeholder = 'Digite seu nome:'
            onChangeText = {this.nomeUsuario}
          />
          <Text style={{fontSize: 25, marginBottom:20, paddingLeft: 5,}}>Informações Inseridas:</Text>
          <View style={{flexDirection: 'row'}}>
            <View>
            <Text style={styles.texto}>Nome: </Text>
            </View>
            <View style={{marginLeft: 25}}>
            <Text style={styles.textoFinal}>{this.state.nome}</Text>
            </View>
          </View>
          <StatusBar style="auto" />
       </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 10,    
  },
  input:{
    height: 45,
    width: 300,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 15,
    padding: 5,
    margin: 10,
    borderRadius: 5,
  },

  textInput:{
    fontSize: 20,
    //textAlign:'center',       
  },

  texto:{
    fontSize: 18,
    fontFamily: 'arial',
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 10
  },

  textoFinal:{
    fontSize: 18,
    fontFamily: 'arial',
    fontStyle: 'italic',  
    padding: 10  
  },
})
