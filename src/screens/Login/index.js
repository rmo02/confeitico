import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import estilos from './estilos';
import { EntradaTexto } from '../../components/EntradaTexto';
import Botao from '../../components/Botao';
import { logar } from '../../service/requisicoesFirebase';
import { Alerta } from '../../components/Alerta';



export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [statusError, setStatusError] = useState('');
  const [mensagemError, setMensagemError] = useState('');

  async function realizarLogin(){
    if(email == ''){
      setMensagemError('Email é obrigatório');
      setStatusError('email');
    } else if(senha == ''){
      setMensagemError('A senha é obrigatória');
      setStatusError('senha');
    } else {
      const resultado = await logar(email, senha)
      if( resultado == 'erro') {
        setMensagemError('Email ou senha não conferem');
        setStatusError('firebase');
      } 
    }
  }


  

  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
        error={statusError == 'email'}
        mensagemError={mensagemError}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
        error={statusError == 'senha'}
        mensagemError={mensagemError}
      />

      <Alerta 
      mensagem={mensagemError}
      error={statusError == 'firebase'}
      setError={setStatusError}
      />
      
      <Botao onPress={() => realizarLogin()}>LOGAR</Botao>
      <Botao 
        onPress={() => { navigation.navigate('Cadastro') }}
      >
        CADASTRAR USUÁRIO
      </Botao>
    </View>
  );
}