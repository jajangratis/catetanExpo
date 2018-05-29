import React , { Component } from 'react'
import { Text, View , TouchableHighlight , StyleSheet } from 'react-native'
import { Header , Left , Title , Right , Icon , Item , Input, Content , List , ListItem , Thumbnail , Body , Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default class Navbody extends Component{

  constructor(){
    super()
    this.state ={
      myNotif : [
        {nama:'Ujang ',notif:'Has post something',time:'1 minutes ago'},
        {nama:'Melly ',notif:'Has Update something',time:'5 minutes ago'},
      ]
    }
  }

  render() {
    return (
            <List>
            <ListItem itemDivider>
              <Text>Earlier</Text>
            </ListItem>  
            {this.state.myNotif.map((items , i)=>{
              return(
                <ListItem avatar key={i}>
                  <Left>
                    <Thumbnail rounded source={require('../assets/logo.png')} />
                  </Left>
                  <Body>
                    <Text>{items.nama + items.notif}</Text>
                    <Text note style={{color:'blue'}}>{items.time}</Text>
                  </Body>
                  <Right>
                    <Icon name='people'/>
                  </Right>
                </ListItem>
              );
            })}
          </List>
    );
  }

  
}

const styles = StyleSheet.create({
  configurations : {
    alignSelf: 'center'
  }
})