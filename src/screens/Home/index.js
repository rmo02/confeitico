import React from 'react';
import { View, Text } from 'react-native';
import Cabecalho from '../../components/Cabecalho';
import Produto from '../../components/Produtos';
import estilos from './estilos';
import { auth } from '../../configs/firebase';

export default function HomePage({ navigation }) {

  const user = auth.currentUser;
  console.log(user)

  function deslogar(){
    auth.signOut();
  }

  return (
    <View style={estilos.container}>
      <Cabecalho logout={deslogar} />
      <Text style={estilos.texto}>Usuário: teste@email.com</Text>

      <Produto nome="Tênis" preco="200,00" />
      <Produto nome="Camisa" preco="100,00" />
      <Produto nome="Suplementos" preco="150,00" />
     </View>
  );
}