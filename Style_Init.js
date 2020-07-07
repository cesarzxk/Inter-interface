import styled from 'styled-components/native';

export const Header = styled.View`
    backgroundColor: rgb(255,101,9);
    alignItems: center;
    justifyContent: center;
    padding:83px;
    width:100%;
`;

export const Container = styled.View`
alignItems: center;
`;

export const Logo = styled.Image`
scaleX:0.6;
scaleY:0.6;
`;
export const Body = styled.View`
flex 1;
alignItems: center;
justifyContent: center;
backgroundColor: rgb(250,250,250);
padding:20px;
width:94%;
border-radius:10;
position: absolute;
left: 12;
right: 0;
top: 225;
`;
export const Texto = styled.Text`
color:#FFF
fontSize:15
;`;

export const Nome = styled.Text``;

export const Conta = styled.Text`
color:#aaa;
`;


export const Sigla = styled.View`
padding:14px;
backgroundColor: #eee;
border-radius:100;
`;
export const SiglaTexto = styled.Text`
color:#fff;
fontSize:18
`;

export const Title = styled.View`
flex-direction: row;
paddingBottom:30;
alignItems: center;
justifyContent: center;
`;

export const Dados = styled.View`
paddingLeft:15;
width:140;
`;

