import React , { Component } from 'react'
import { View , Text , Image , Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { Header , Title , Left , Right , Button , Icon , Body , Item , Input } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { createStackNavigator  } from 'react-navigation'

export default class Navhead extends Component{
  render(){
    return (
      <Header>
      <Left>
        <Button transparent onPress={()=>(alert('Ini Kamera'))}>
          <Icon name='camera' style={{color:'white'}}/>
        </Button>
      </Left>
      <Body>
        <Item style={{ width : 200 }}>
          <Icon name='search' style={{color:'white'}}/>
          <Input placeholder='Search' placeholderTextColor='white' />
        </Item>
      </Body>
      <Right>
        <Button transparent onPress={()=>(this.setState({Pages:"Profiles"}))}>
          <Image source={require('../assets/messenger-logo.png')} style={{width:30 , height:30}}/>
        </Button>
      </Right>
      </Header>
    );
  }
}