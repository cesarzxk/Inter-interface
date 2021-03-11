import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container, Header,Logo, Body, Texto, Nome, Conta, Dados, Title, Sigla, SiglaTexto} from './Style_Init';
import logo from "./assets/Inter-Logo.png";
import { Button } from 'react-native-paper';



export default function Init({navigation}) {
  

  return (
    <Container>
      <Header>
      <Logo source={logo}/>
      </Header>
      <Body>
        <Title>
         <Sigla><SiglaTexto>CV</SiglaTexto></Sigla>
         <Dados>
          <Nome>CESAR VARGAS DOS SANTOS</Nome>
          <Conta>123456-7</Conta>
         </Dados>

         <Button style={styles.botao_trocar} mode='Outlined'>
         <Text style={styles.trocar}>TROCAR</Text></Button>
         
        </Title>
        <Button onPress={() => navigation.navigate('Home')} style={styles.entrar} mode="contained" color="rgb(255,101,9)">
          <Texto>ENTRAR</Texto></Button>
      </Body>

    </Container>
  );
}

const styles = StyleSheet.create({
botao_trocar:{
  flex: 1,
  borderWidth: 0.5,
  borderColor:"#ccc",
  alignItems:"center",
  maxHeight: 30,
  maxWidth:140,
  justifyContent:'center',
},
trocar:{
  color: "#000",
  
},
entrar:{
  width: 200,
  height:45,
  justifyContent: 'center',
  alignItems:'center'
}

});
