import React, { useEffect, useState } from "react";
import { View } from "react-native";
import estilos from "./estilos";
import { EntradaTexto } from "../../components/EntradaTexto";
import Botao from "../../components/Botao";
import { logar } from "../../service/requisicoesFirebase";
import { Alerta } from "../../components/Alerta";
import { alteraDados, verificarSeTemEntradaVazia } from "../../utils/comum";
import { entradas } from "./entradas";

export default function Login({ navigation }) {
  const [dados, setDados] = useState({
    email: "",
    senha: "",
  });
  const [statusError, setStatusError] = useState("");
  const [mensagemError, setMensagemError] = useState("");



  async function realizarLogin() {
    if(verificarSeTemEntradaVazia(dados, setDados)) return
    const resultado = await logar(dados.email, dados.senha)
    if(resultado == 'erro'){
      setStatusError(true)
      setMensagemError('E-mail ou senha não conferem')
      return
    }
  }

  return (
    <View style={estilos.container}>
      {entradas.map((entrada) => {
        return (
          <EntradaTexto
            key={entrada.id}
            {...entrada}
            value={dados[entrada.name]}
            onChangeText={(valor) =>
              alteraDados(entrada.name, valor, dados, setDados)
            }
          />
        );
      })}

      <Alerta
        mensagem={mensagemError}
        error={statusError}
        setError={setStatusError}
      />

      <Botao onPress={() => realizarLogin()}>LOGAR</Botao>
      <Botao
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
      >
        CADASTRAR USUÁRIO
      </Botao>
    </View>
  );
}
