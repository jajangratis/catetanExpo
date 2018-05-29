import React , { Component } from 'react'
import { StyleSheet, Text, View , TouchableHighlight } from 'react-native'
import { Header , Left , Title , Right , Icon , Item , Input, Content , List , ListItem , Thumbnail , Body , Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { createStackNavigation  } from 'react-navigation'

export default class Menus extends Component{

  render() {
    return (
        <List>
            <ListItem avatar>
              <Left>
                <Icon name='people'/>
              </Left>
              <Body>
              <Button transparent onPress={()=>(this.setState({Pages:'Profiles'}))}>
                <Text>Profile</Text>
              </Button>
              </Body>
              <Right/>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Icon name='ios-people-outline'/>
              </Left>
              <Body>
              <Button transparent dark onPress={ ()=> (this.setState({Pages : 'FriendsTab'})) }>
                  <Text>Friends</Text>
                </Button>
                <Text note>2 Requests</Text>
              </Body>
              <Right/>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Icon name='star'/>
              </Left>
              <Body>
                <Text>Messanger</Text>
              </Body>
              <Right/>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Icon name='logo-instagram'/>
              </Left>
              <Body>
                <Text>Instagram</Text>
              </Body>
              <Right/>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Icon name='ios-flag-outline'/>
              </Left>
              <Body>
                <Text>Pages</Text>
              </Body>
              <Right/>
            </ListItem>
        </List>
    );
  }

  
}

