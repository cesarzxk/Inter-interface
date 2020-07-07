import styled from 'styled-components/native';

export const Trabalhando = styled.Image`
`;

export const ContainerScroll = styled.ScrollView`
backgroundColor:#eee;
`;

export const Header = styled.View`
backgroundColor: rgb(255,101,9);
paddingTop:50px;
height:190px;
width:100%;
flex-direction: row;
flex:1;
`
export const HeaderScroll = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
  })
  `
  paddingLeft:20px;
  paddingRight:0px;
  minWidth:150;
  `;

export const Dados = styled.View`
width:300px;

`;
export const DadosText = styled.Text`
color:#fff;
fontSize:20px;
maxWidth:230px;
`;

export const Sigla = styled.View`
paddingLeft:70px;
paddingRight:30px;
`;

export const SiglaText = styled.Text`
padding:10px;
backgroundColor: #fff;
border-radius:100;
color:rgb(255,101,9);
fontSize:20px;
`;
export const Gaveta = styled.View`
flex-direction: row;
position: absolute;
top:150;
align-self:center;
`
export const TextoGaveta = styled.Text`

`;

export const Gaveta_item = styled.View`
backgroundColor:#fff;
minWidth:100;
minHeight:100px;
maxWidth:100;
maxHeight:100px;
marginRight:5px;
marginLeft:5px;
borderRadius:12;
alignItems: center;
justifyContent:center;
`
export const Lista = styled.View`
flex:1;
marginTop:5px;
`
export const Objeto = styled.View`
flex-direction: row;
marginBottom:10px;
alignItems: center;
justifyContent:center;

`
export const Icone = styled.View`
borderRadius:100;
backgroundColor:#eef;
padding:15px;
marginBottom:10px;
`
export const Cards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})
`
marginTop:40;
align-self:center;
`
export const Card = styled.View`
height:200px;
width:300;
backgroundColor:#fff;
marginLeft:10px;
borderRadius:12;
`

export const Container = styled.View`
align-Self: center;
backgroundColor:#fff;

`;

