import React , { Component } from 'react'
import { StyleSheet, Text, View , TouchableHighlight , ImageBackground , screenWidth , screenHeight , Image } from 'react-native'
import { Header , Left , Title , Right , Icon , Item , Input, Content , List , ListItem , Thumbnail , Body , Button , Form , Card , CardItem } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { FlatList } from 'react-native-gesture-handler';

export default class Profiles extends Component{

  constructor(){
    super()
    this.state = {
        barang : [
            {nama:'barang A',pic:''},
            {nama:'barang B',pic:''},
            {nama:'barang C',pic:''},
            {nama:'barang D',pic:''}
        ]
    }
  }

  render() {
    return (
        <List>
            <ListItem>
                <FlatList
                data={[
                    {name: 'You',icon:'md-person'},
                    {name: 'Saved',icon:'star'},
                    {name: 'Categories',icon:'menu'},
                    {name: 'Search',icon:'search'}
                ]}
                renderItem={({item}) => 
                    <Button transparent>
                        <Item rounded style={{margin:10}}>
                            <Icon name={item.icon} />
                            <Text>{item.name}</Text>
                        </Item>
                    </Button>
                }
                horizontal
                />
            </ListItem>
            <ListItem itemDivider/>
            <ListItem>
                <Col>
                    <Item>
                        <Icon name='md-person'/>
                        <Input placeholder='What are you listing?'/>
                    </Item>
                </Col>
                <Right>
                    <Button transparent>
                        <Icon name='camera'/>
                    </Button>
                </Right>
            </ListItem>
            <ListItem itemDivider/>
            <ListItem>
                <Grid>
                    <Row>
                        <Left>
                            <Text>Top Picks</Text>
                        </Left>
                        <Button transparent>
                            <Text>Change location</Text>
                        </Button>
                    </Row>
                    <Row>
                        <FlatList data={this.state.barang} numColumns={2} renderItem={({item})=>
                            <Item>
                                <Image source={require('../assets/icon.png')} style={{width:150,height:150}} namabarang={item.barang}/>
                            </Item>
                        }/>
                    </Row>
                </Grid>
            </ListItem>
            <ListItem itemDivider/>
            <ListItem>
                <Grid>
                    <Row>
                        <Left>
                            <Text>Electronics , Computers</Text>
                        </Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Row>
                    <Row>
                        <FlatList data={this.state.barang} numColumns={2} renderItem={({item})=>
                            <Item>
                                <Image source={require('../assets/icon.png')} style={{width:150,height:150}} namabarang={item.barang}/>
                                
                            </Item>
                        }/>
                    </Row>
                </Grid>
            </ListItem>
            <ListItem itemDivider/>
            <ListItem>
                <Grid>
                    <Row>
                        <Left>
                            <Text>Mobile Phones</Text>
                        </Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Row>
                    <Row>
                        <FlatList data={this.state.barang} numColumns={2} renderItem={({item})=>
                            <Item>
                                <Image source={require('../assets/icon.png')} style={{width:150,height:150}} namabarang={item.barang}/>
                                
                            </Item>
                        }/>
                    </Row>
                </Grid>
            </ListItem>
            <ListItem itemDivider/>
            <ListItem>
                <Grid>
                    <Row>
                        <Left>
                            <Text>Clothing</Text>
                        </Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Row>
                    <Row>
                        <FlatList data={this.state.barang} numColumns={2} renderItem={({item})=>
                            <Item>
                                <Image source={require('../assets/icon.png')} style={{width:150,height:150}} namabarang={item.barang}/>
                            </Item>
                        }/>
                    </Row>
                </Grid>
            </ListItem>
        </List>
    );

    
  }
}

const styles = StyleSheet.create({
  centerItems:{
    alignItems: 'center',
    alignContent: 'center',
  },
  screenConf:{
    width: screenWidth ,
  }
})

