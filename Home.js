import React from 'react';
import {Text } from 'react-native';
import {Container,ContainerScroll, Header, HeaderScroll, Dados,DadosText, Sigla, SiglaText, Gaveta, Gaveta_item, Lista, Objeto, Icone, Cards, Card} from './Style_Home';
import { List } from 'react-native-paper';
import { Entypo, Feather, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';



export default function Home(){

    return(
        <ContainerScroll>
        <Header>
            <HeaderScroll>
                <Dados>
                 <DadosText>Saldo em conta</DadosText>
                 <DadosText>R$ 1.193.433,10   <Entypo name="eye" size={30} color="white" /></DadosText>
                </Dados>
                <Dados>
                </Dados>

                <Dados>
                 <DadosText>Total investido</DadosText>
                 <DadosText>R$ 0,00   <Entypo name="eye" size={30} color="white" /></DadosText>
                </Dados>
                <Dados>
                </Dados>
                
            </HeaderScroll>
            <Sigla><SiglaText>CV</SiglaText></Sigla>
        </Header>

        <Gaveta>
        <Gaveta_item>
        <Icone>
        <Feather name="repeat" size={20} color="orange" />
        </Icone>
        <Text>Transferência</Text>

        </Gaveta_item>
        <Gaveta_item>
        <Icone>
        <MaterialCommunityIcons name="barcode-scan" size={20} color="orange" />
        </Icone>
        <Text>Pagamentos</Text>
        </Gaveta_item>

        <Gaveta_item>
        <Icone>
        <FontAwesome5 name="money-check-alt" size={20} color="orange" />
        </Icone>
        <Text>Investimentos</Text>
        </Gaveta_item>
        </Gaveta>

        <Lista>
        <List.Section>
          <List.Accordion>
              <Objeto>
              <Gaveta_item>
              <Icone>
        <Feather name="repeat" size={20} color="orange" />
        </Icone>
        <Text>Transferência</Text>
              </Gaveta_item>

              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>

              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>

              </Objeto>
              <Objeto>

              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
 
              </Objeto>
              <Objeto>

              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
         
              </Objeto>
              <Objeto>
              
              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
              </Objeto>
              <Objeto>

              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              
              <Gaveta_item>
              <Icone>
              <Feather name="repeat" size={20} color="orange" />
              </Icone>
              <Text>Transferência</Text>
              </Gaveta_item>
              </Objeto>
        </List.Accordion>
        </List.Section>
        </Lista>


        <Cards>
            <Card>

            <Text>Testando cards</Text>

            </Card>

            <Card>

            <Text>Testando cards</Text>

            </Card>

            <Card>

            <Text>Testando cards</Text>

            </Card>

            <Card>

            <Text>Testando cards</Text>

            </Card>

            <Card>

            <Text>Testando cards</Text>

            </Card>
        </Cards>

        <Container>


        </Container>
        </ContainerScroll>
    );
}